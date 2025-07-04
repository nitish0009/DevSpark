import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const suggestions = [
  {
    product: "Plastic Water Bottle",
    alt: "Stainless Steel Bottle",
    benefit: "Reusable, long-lasting, zero waste.",
  },
  {
    product: "Multi-layered Chip Packet",
    alt: "Compostable Snack Pouch",
    benefit: "Biodegradable and easier to dispose.",
  },
  {
    product: "Plastic Grocery Bag",
    alt: "Cloth Tote Bag",
    benefit: "Reusable over 100+ times, washable.",
  },
];

const AISuggestions = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-6 font-sans">
      <Navbar />
      <main className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">🤖 AI Suggestions</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Based on your scanned products, here are greener alternatives.
        </p>

        <div className="space-y-6">
          {suggestions.map((item, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-semibold">Instead of: {item.product}</h3>
              <p className="text-green-700 dark:text-green-300 mt-1">
                Try: <strong>{item.alt}</strong>
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">{item.benefit}</p>
            </div>
          ))}
        </div>

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

export default AISuggestions;
