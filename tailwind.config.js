/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'charcoal': '#3E505B',
      'gainsboro': '#D8DBE2',
      'blue': '#A9BCD0'
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
