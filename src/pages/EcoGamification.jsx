import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const badges = [
  { icon: "🔰", name: "First Scan" },
  { icon: "🧠", name: "Eco Expert" },
  { icon: "🔥", name: "Plastic Free Streak" },
  { icon: "🌍", name: "Global Contributor" },
];

const EcoGamification = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-6 font-sans">
      <Navbar />
      <main className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">🏆 Eco Gamification</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Earn points and badges for your contributions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {badges.map((badge, i) => (
            <div key={i} className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-lg text-center shadow">
              <div className="text-4xl mb-2">{badge.icon}</div>
              <p className="text-sm font-medium">{badge.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-green-100 dark:bg-green-800 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">
            Eco Points: <span className="text-green-700 dark:text-green-300">620</span>
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            Redeem points for eco-rewards (coming soon!).
          </p>
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

export default EcoGamification;
