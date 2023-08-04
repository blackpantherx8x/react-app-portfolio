/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif'],
      },
      colors: {
        'custom-purple': '#8f2953',
        'tealCustom': 'bg-[#69b6a5]',
      },
    },
  },
  plugins: [],
};