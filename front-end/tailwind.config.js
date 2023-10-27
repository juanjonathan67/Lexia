/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple-primary': '#FEEFFF',
        'purple-dark': '#656ED3',
        "darker-purple": '#44384E',
        'highlight-purple': '#B681E2',
        'pink' : '#E19BEC',
        'gray-new' : '#889DA8',
        'light-grey': '#BFC8CE',
        'light-white': 'rgba(255,255,255,0.18)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [],
}