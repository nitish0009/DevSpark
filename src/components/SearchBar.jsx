export default function SearchBar({ searchValue, setSearchValue, triggerScanner }) {
  return (
    <div className="max-w-xl mx-auto mb-8 flex gap-2">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter a product name or barcode"
        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        // ❌ Removed onFocus trigger here
      />
      <button
        onClick={triggerScanner}
        className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-2"
      >
        <span className="text-sm">Scan</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 7V4h3M4 17v3h3M20 7V4h-3M20 17v3h-3M4 12h16" />
        </svg>
      </button>
    </div>
  );
}
