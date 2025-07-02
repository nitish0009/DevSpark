import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 sm:px-8 py-12 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto space-y-6 leading-relaxed">
        <h1 className="text-4xl font-bold mb-2">About DevSpark</h1>

        <p>
          <strong>DevSpark</strong> is a next-gen sustainability tool that helps consumers identify the environmental
          footprint of everyday product packaging — from chips packets to juice boxes. By combining barcode scanning
          with AI analysis, we aim to raise awareness and inspire mindful consumption.
        </p>

        <p>
          Every scanned product provides an <strong>Eco Score</strong>, a <strong>Trust Score</strong>, and actionable
          insights such as recyclability, plastic type, and disposal impact. We bridge the gap between manufacturers
          and eco-conscious buyers by making packaging data accessible, visual, and verified.
        </p>

        <p>
          Whether you're scanning a snack at the store or researching alternatives at home, PlastiPeek puts knowledge
          in your hands — helping you make smarter, greener decisions.
        </p>

        <div className="pt-6">
          <h2 className="text-2xl font-semibold mb-2">🌱 Our Mission</h2>
          <ul className="list-disc list-inside space-y-2 pl-2">
            <li>Promote transparency in plastic packaging.</li>
            <li>Empower users with clear, trustworthy eco insights.</li>
            <li>Reduce plastic pollution through informed consumer behavior.</li>
          </ul>
        </div>

        <div className="pt-10 text-center">
          <Link
            to="/"
            className="text-green-600 dark:text-green-400 hover:underline font-medium text-sm"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
