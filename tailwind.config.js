/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': {
        50: '#FFBF7F',
        100: '#00FF15',
      },
    },
    extend: {},
  },
  plugins: [],
}