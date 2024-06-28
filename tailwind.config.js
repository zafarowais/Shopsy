/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Black": "#1E2832",
        "headerBG": "#6adfec",
        "primaryBG": "#c4e8ec",
      },
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

