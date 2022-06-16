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
    extend: {
      padding: {
        '1/2': '50%',
        '1/3': '33.333333%', 
        '2/5': '40%',
        full: '100%',
      },
    },
  },
  plugins: [],
}
