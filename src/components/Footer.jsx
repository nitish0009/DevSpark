import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 mt-16 py-10 px-6 text-center text-gray-700 dark:text-gray-300">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Plastic Stats Card */}
        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg px-6 py-4 max-w-sm w-full">
            <p className="text-lg font-semibold text-green-700 dark:text-green-400">
              ♻ You've scanned <span className="font-bold text-green-800 dark:text-green-300">3</span> products
            </p>
            <p className="text-sm mt-1 text-gray-500 dark:text-gray-300">
              and saved ~<strong>200g</strong> of plastic 🌱
            </p>
          </div>
        </div>

        {/* Pledge CTA */}
<div className="text-xl font-semibold text-green-800 dark:text-green-300">
  🎯 Take the{" "}
  <span className="cursor-pointer text-green-700 dark:text-green-300 hover:text-green-600 dark:hover:text-green-400 font-bold transition">
    1 kg Plastic-Free Pledge
  </span>
</div>


        {/* Social Icons */}
        <div className="flex justify-center gap-6 pt-4 text-2xl">
          <a
            href="#"
            className="text-gray-500 hover:text-blue-500 transition"
            title="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-pink-500 transition"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-blue-700 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Copyright */}
     <p className="pt-4 text-xs text-gray-400 dark:text-gray-500">
  © 2025 <span className="font-bold text-gray-500 dark:text-gray-400">DevSpark</span>. All rights reserved.
</p>
      </div>
    </footer>
  );
}
