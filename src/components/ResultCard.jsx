import { Link } from "react-router-dom";

export default function ResultCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-4 hover:shadow-lg transition">
        <div className="flex gap-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-20 h-20 object-contain"
          />
          <div className="flex-1">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm mt-1">
              <span className="font-semibold">Eco Score:</span>{" "}
              <span className="bg-yellow-100 text-yellow-800 text-sm px-2 py-1 rounded-full">
                {product.ecoScore}
              </span>
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {product.summary}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
