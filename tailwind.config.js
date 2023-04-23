/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rd: '#FE2C39',
        blk: '#0F0F0F'
      },
      fontFamily: {
        poppins: ['Poppins'],
        raleway: ['Raleway']
      }
    },
  },
  plugins: [],
}

