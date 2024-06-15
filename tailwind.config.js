/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable dark mode with a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2937',  // dark gray for primary color
        secondary: '#10b981', // green color for secondary actions
      },
    },
  },
  plugins: [],
}