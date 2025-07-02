/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // ✅ Correct placement
  theme: {
    extend: {
      animation: {
        scan: "scan 1.5s infinite linear",
      },
      keyframes: {
        scan: {
          "0%": { top: "0%" },
          "100%": { top: "100%" },
        },
      },
    },
  },
  plugins: [],
}
