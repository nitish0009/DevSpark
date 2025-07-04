import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-neutral-100 dark:bg-gray-900 transition-colors duration-300 shadow-md py-4 mb-8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap">
        <Link to="/" className="text-2xl font-bold text-green-700 dark:text-green-400">
          ♻️ EcoScan
        </Link>

        <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
          {[
            { to: "/about", label: "About" },
            { to: "/team", label: "Team" },
            { to: "/literacy", label: "Packaging Literacy" },
            { to: "/eco-profile", label: "Eco Profile" },
            { to: "/ai-suggestions", label: "AI Suggestions" },
            { to: "/gamification", label: "Gamification" },
            { to: "/barcode-lookup", label: "Barcode Lookup" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-base font-medium text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
