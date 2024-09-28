/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#C25B4E",
        secondaryColor: "#2B2D42",
      },
    },
  },
  plugins: [],
};
