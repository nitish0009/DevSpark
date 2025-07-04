import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const dummyData = {
  "8901234567890": {
    name: "Mineral Water Bottle",
    score: 3,
    plasticType: "PET (♳)",
    recyclable: "Yes",
    history: ["2021: PET", "2023: PET with 30% recycled content"],
  },
  "7894561230123": {
    name: "Snack Pack",
    score: 1,
    plasticType: "Multi-layer (♹)",
    recyclable: "No",
    history: ["2020: LDPE", "2022: Multi-layered"],
  },
};

const BarcodeLookup = () => {
  const [barcode, setBarcode] = useState("");
  const [result, setResult] = useState(null);

  const handleLookup = () => {
    setResult(dummyData[barcode] || "notfound");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-6 font-sans">
      <Navbar />
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">📦 Barcode Lookup</h1>

        <div className="flex items-center gap-4 mb-6">
          <input
            type="text"
            placeholder="Enter barcode"
            className="border px-4 py-2 w-full rounded dark:bg-gray-800 dark:border-gray-600 dark:text-white"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
          />
          <button
            onClick={handleLookup}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Lookup
          </button>
        </div>

        {result === "notfound" && (
          <p className="text-red-600">❌ Product not found.</p>
        )}

        {result && result !== "notfound" && (
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{result.name}</h3>
            <p><strong>Plastic Type:</strong> {result.plasticType}</p>
            <p><strong>Recyclable:</strong> {result.recyclable}</p>
            <p><strong>Eco Score:</strong> {result.score} / 10</p>
            <p className="mt-2"><strong>Packaging History:</strong></p>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
              {result.history.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded transition duration-300"
          >
            ← Back to Home
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BarcodeLookup;
