/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // "./index.html",
    "./main.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      // transparent: 'transparent',
      // current: 'currentColor',
      // 'white': {
      //   50: '#FFBF7F',
      //   100: '#00FF15',
      // },
    },
    screens: {
      'xs': '250px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',    
    },
    extend: {},
  },
  plugins: [],
}