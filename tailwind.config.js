/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f8ff",
          500: "#3c5cff",
          700: "#2238cc"
        }
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
