/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'body': ['Arial'],
    },
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar')
  ],
}
