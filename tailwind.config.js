/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bowby: ['Bowlby One', 'sans-serif'],
        manrope:['Manrope', 'sans-serif']
      },
      colors:{
        primary: '#840032',
        secondary: '#294936'
      }
    },
  },
  plugins: [],
}

