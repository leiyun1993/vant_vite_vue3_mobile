/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      translate:{
        "n-1/2":"-50%"
      },
      fontSize:{
        "mini":"12px"
      }
    },
  },
  plugins: [],
}
