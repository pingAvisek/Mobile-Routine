/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4682B4",
      },
      fontFamily: {
        sans: ["Ubuntu", "sans-serif"],
      }
    },
  },
  plugins: [],
};
