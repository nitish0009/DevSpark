import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EcoProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-6 font-sans">
      <Navbar />
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">🧠 Your Eco Profile</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Track your eco-impact based on your scans and actions.
        </p>

        <div className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow mb-6">
          <p className="text-lg mb-2"><strong>Products Scanned:</strong> 42</p>
          <p className="text-lg mb-2"><strong>Avg. Packaging Score:</strong> 7.4 / 10</p>
          <p className="text-lg"><strong>Plastic Avoided:</strong> ~1.2kg</p>
        </div>

        <div className="bg-green-100 dark:bg-green-800 p-6 rounded-xl shadow">
          <h3 className="text-xl font-semibold mb-2">Your Badges</h3>
          <div className="flex gap-4 mt-4">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-full shadow text-3xl">🏅</div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-full shadow text-3xl">♻️</div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-full shadow text-3xl">🌱</div>
          </div>
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

export default EcoProfile;
