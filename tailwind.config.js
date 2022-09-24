
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        grayColor:"#666666",
        primary:"#f0b12b",
        title:"#222222"
      }
    },
  },
  plugins: [],
}
