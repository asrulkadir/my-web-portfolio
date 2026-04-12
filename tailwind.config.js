/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5196DF',
        'app-text': '#023060',
        'app-bg': '#f5f5f5',
        'app-nav': '#e6e6e6',
      },
    },
  },
  plugins: [],
}

