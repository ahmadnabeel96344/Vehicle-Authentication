/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      black: "#000",
      gray: {
        5: "#F3F3F3",
        25: "#B5B5B5",
      },
      red: {
        5: "#E73D1C"
      }
    },
    extend: {},
  },
  plugins: [],
}

