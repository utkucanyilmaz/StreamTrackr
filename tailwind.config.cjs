/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-black": "#0E0E10",
        "tw-purple": "#BF94FF",
        "tw-white": "#F7F7F8",
      },
      fontFamily: {
        inter: ["Inter", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
