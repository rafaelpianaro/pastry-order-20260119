/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        warm: {
          50: '#FAF8F5',
          100: '#F3EFE8',
          200: '#E8DFD0',
          300: '#DCCFB8',
          400: '#F6D8AE',
          500: '#D4A574',
          600: '#B8834D',
          700: '#8B5E3C',
          800: '#6B4423',
          900: '#4A2F18',
        }
      },
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
