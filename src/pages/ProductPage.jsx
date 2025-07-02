import { useParams } from "react-router-dom";
import products from "../data/products";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8 text-center text-gray-800 dark:text-gray-100">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <p className="text-gray-500 mt-2">We couldn’t locate this product ID in our database.</p>
        <a href="/" className="mt-4 inline-block text-green-600 dark:text-green-400 hover:underline">
          ← Back to Home
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-8 text-gray-800 dark:text-gray-100">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <img
          src={product.image}
          alt={product.name}
          className="w-40 h-40 object-contain mx-auto rounded shadow"
        />
        <p className="mb-4 text-gray-600 dark:text-gray-300">{product.summary}</p>

        <div className="flex justify-center gap-6 text-sm mb-6">
          <div className="p-3 bg-yellow-100 text-yellow-800 rounded-lg">
            <span className="block font-bold text-lg">{product.ecoScore}</span>
            Eco Score
          </div>
          <div className="p-3 bg-green-100 text-green-800 rounded-lg">
            <span className="block font-bold">{product.trustScore}</span>
            Trust Score
          </div>
        </div>

        {product.insights && product.insights.length > 0 && (
          <div className="text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow mb-6">
            <h2 className="text-lg font-semibold mb-2 text-green-700 dark:text-green-400">
              📊 Environmental Insights
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
              {product.insights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        <a
          href="/"
          className="text-green-600 dark:text-green-400 text-sm font-medium hover:underline"
        >
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
