import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const symbols = [
  { code: "♳", name: "PET", desc: "Commonly used in water bottles; recyclable but limited reuse." },
  { code: "♴", name: "HDPE", desc: "Used for milk jugs, shampoo bottles; easily recyclable." },
  { code: "♵", name: "PVC", desc: "Toxic when burned; rarely recycled." },
  { code: "♶", name: "LDPE", desc: "Plastic bags; sometimes recyclable in store drop-offs." },
  { code: "♷", name: "PP", desc: "Yogurt cups, medicine bottles; moderately recyclable." },
  { code: "♸", name: "PS", desc: "Styrofoam; almost never recycled." },
  { code: "♹", name: "Others", desc: "Multi-layered plastics; very hard to recycle." },
];

const PackagingLiteracy = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-6 font-sans">
      <Navbar />
      <main className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">♻️ Packaging Literacy</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Learn about common plastic symbols and what they mean for sustainability.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {symbols.map((sym, idx) => (
            <div
              key={idx}
              className="bg-green-50 dark:bg-green-900 p-5 rounded-xl shadow hover:shadow-lg transition-all"
            >
              <div className="text-5xl">{sym.code}</div>
              <h3 className="text-xl font-semibold mt-2">{sym.name}</h3>
              <p className="text-sm mt-1">{sym.desc}</p>
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

export default PackagingLiteracy;
