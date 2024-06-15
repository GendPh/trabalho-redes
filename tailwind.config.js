/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#ecf2f9',
        'background': '#050b10',
        'primary': '#98bcdc',
        'secondary': '#262b73',
        'accent': '#5759c7',
      },
    },
  },
  plugins: [],
}