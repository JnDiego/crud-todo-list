/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#C25B4E", // Define el color principal aquí
      },
    },
  },
  plugins: [],
};
