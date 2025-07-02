function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <nav className="bg-green-100 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-green-800">PlastiPeek</h1>
        <input
          type="text"
          placeholder="Search or scan barcode..."
          className="p-2 rounded border border-gray-300 w-60"
        />
      </nav>

      <main className="p-6">
        <h2 className="text-3xl font-semibold mb-4">
          Understand the environmental impact of plastic packaging
        </h2>

        <div className="bg-green-50 p-4 rounded shadow max-w-xl">
          <div className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/DASANI_2021_logo.png"
              alt="bottle"
              className="w-24"
            />
            <div>
              <p className="text-lg font-semibold">Eco Impact Score: <span className="text-yellow-600">44</span></p>
              <p className="mt-2 text-sm">Plastic material: PET (Polyethylene Terephthalate)</p>
            </div>
          </div>
          <div className="mt-4 border-t pt-4">
            <p className="font-bold text-green-700">Trust Score ✅</p>
            <p className="text-sm">
              This packaging is labeled as 100% recyclable. Independent sources confirm recyclability but note low effective rates.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
