/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","*.html"],
  theme: {
    extend: {
      backgroundImage: {
        'background-hero': "url('../assets/images/hero-image.jpg')",
        'background-code': "url('../assets/images/code.png')",
      }
    },
    colors: {
      "white": "#FFFFFF",
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      "orange1": "#f74b3b",
      "orange2": "#d9534e",
      "grey-dark": "#212121",
    },
    fontFamily:{
      arvo: ["arvo"],
      roboto: ["roboto"],
      helvetica: ["helvetica"],
    }
  },
  plugins: [],
}

