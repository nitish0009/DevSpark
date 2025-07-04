import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ResultCard from "../components/ResultCard";
import Footer from "../components/Footer";
import Html5Scanner from "../components/Html5Scanner";
import products from "../data/products";

export default function Home() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [searchValue, setSearchValue] = useState("");
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-6 font-sans">
      {/* Navbar on top */}
      <Navbar />

      {/* Dark Mode Toggle BELOW Navbar */}
      <div className="flex justify-end max-w-6xl mx-auto mt-2 mb-6">
        <button
          onClick={() => setDark(!dark)}
          className="bg-gray-200 dark:bg-gray-700 text-sm px-4 py-2 rounded-full text-gray-800 dark:text-white"
        >
          {dark ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Plastic Packaging Impact Analyzer
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Understand the environmental impact of your product’s plastic packaging.
        </p>
      </div>

      <SearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        triggerScanner={() => setShowScanner(true)}
      />

      {/* Results */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((p) => <ResultCard key={p.id} product={p} />)
        ) : (
          <p className="col-span-2 text-center text-gray-500 dark:text-gray-400">
            No products found for “{searchValue}” 🤷
          </p>
        )}
      </div>

      <Footer />

      {/* Scanner */}
      {showScanner && <Html5Scanner onClose={() => setShowScanner(false)} />}
    </div>
  );
}
