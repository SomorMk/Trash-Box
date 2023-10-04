/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth : {
        'container': '1320px'
      },
      colors : {
        'w': '#fff',
        'b': '#000',
        'b2': '#7F7F7F',
        'pri': '#7638FF',
        'sec': '#FF9000',
        'bgc': '#EDF0F7'
      },
      fontFamily: {
        'dosis': ['Dosis', 'sans-serif'],
        'mon': ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        'banner': "url('/src/assets/images/banner.png')"
      }
    },
  },
  plugins: [],
}