import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-end gap-6 max-w-6xl mx-auto px-4 mb-4">
      <Link
        to="/about"
        className="text-base font-medium text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 transition"
      >
        About
      </Link>
      <Link
        to="/team"
        className="text-base font-medium text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300 transition"
      >
        Team
      </Link>
    </div>
  );
}
