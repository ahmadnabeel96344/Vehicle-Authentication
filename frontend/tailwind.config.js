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
      },
      green : {
        5:"#E5FAF2",
        25:"#00D17F",
        50:"#00D17F33",
        75:"#006E43",
        100:"#00D17F"
      },
    },
    extend: {},
  },
  plugins: [],
}

