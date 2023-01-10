/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-black": "#0E0E10",
        "tw-purple": "#BF94FF",
      },
    },
  },
  plugins: [],
};
