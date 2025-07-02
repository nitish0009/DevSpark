import { useEffect, useState } from "react";
import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

export default function Html5Scanner({ onClose }) {
  const navigate = useNavigate();
  const [status, setStatus] = useState("📦 Scanning...");
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    const scanner = new Html5Qrcode("html5qr");

    const startScanner = async () => {
      try {
        const cameras = await Html5Qrcode.getCameras();
        if (!cameras || cameras.length === 0) {
          setStatus("❌ No camera found.");
          return;
        }

        const deviceId = cameras[0].id;

        await scanner.start(
          { deviceId },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
            formatsToSupport: [
              Html5QrcodeSupportedFormats.EAN_13,
              Html5QrcodeSupportedFormats.EAN_8,
              Html5QrcodeSupportedFormats.UPC_A,
              Html5QrcodeSupportedFormats.UPC_E,
              Html5QrcodeSupportedFormats.CODE_128,
              Html5QrcodeSupportedFormats.CODE_39,
              Html5QrcodeSupportedFormats.ITF,
              Html5QrcodeSupportedFormats.QR_CODE,
            ],
          },
          async (decodedText) => {
            if (scanned) return;
            setScanned(true);
            const cleanedText = decodedText.trim();
            console.log("Scanned Text:", cleanedText);

            const match = products.find(
              (p) =>
                cleanedText === p.barcode?.trim() ||
                cleanedText === p.id?.trim() ||
                cleanedText.includes(p.id?.trim())
            );

            if (match) {
              setStatus(`✅ Product found: ${match.name || match.id}`);
              await scanner.stop();
              navigate(`/product/${match.id}`);
            } else {
              setStatus("❌ Product not found");
              await scanner.stop();
              setTimeout(() => {
                onClose();
              }, 2000);
            }
          }
        );
      } catch (err) {
        console.error("Scan error:", err);
        setStatus("❌ Failed to start scanner.");
      }
    };

    setTimeout(startScanner, 200);

    return () => {
      if (scanner.isScanning) {
        scanner.stop().catch((e) => console.warn("Stop error:", e));
      }
    };
  }, [navigate, onClose, scanned]);

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg w-[90%] max-w-md text-center relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-red-500 text-sm font-semibold"
        >
          ✕ Close
        </button>
        <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
          Scan Barcode
        </h2>

        <div className="relative border rounded overflow-hidden w-full h-64 bg-black">
          <div id="html5qr" className="w-full h-full" />
          <div className="absolute top-0 left-0 w-full h-[2px] bg-red-500 animate-scan" />
        </div>

        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">{status}</p>
      </div>
    </div>
  );
}
