/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Sets Inter as the default sans-serif font
        // You can also define custom font names if needed:
        // inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 