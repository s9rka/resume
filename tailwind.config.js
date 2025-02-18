/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        
        light_50: "#f1f3fd",
        light_100: "#e0e6f9",
        primary_blue: "#404ecf",
        almost_black: "#101129"
      },
      boxShadow: {
        'sidebar': 'inset 0px 2px 4px 0px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}

