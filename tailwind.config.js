// tailwind.config.js
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    minHeight: {
      '0': '0',
      'content': 'fit-content',
      'full': '100%',
      'screen': '100vh',
    },
    colors: {
      green: {
        100: "#c9e094",
        200: "#83A03d",
        300: '#657548',
        400: '#2b3d1f'
      },
      yellow: {
        100: "#fbf060",
        200: "#e2ce35",
        300: '#d4ab29',
        400: '#a28c31'
      },
      orange: {
        100: "#ecb741",
        200: "#ef932e",
        300: '#d47a28',
        400: '#aa6829'
      },
      brown: {
        100: "#e2ca99",
        200: "#997744",
        300: '#8d5a24',
        400: '#3f2a1c'
      },
      white: {
        100: "#fbf9ec",
        200: "#f9f4d4",
        300: '#e0c67b',
        400: '#c39e4c'
      },
      accent: {
        100: "#f8d7d7",
        200: "#dce7e6",
        300: '#8e4e3d',
        400: '#ddcde2'
      },
      black: {
        100: "#414042",
        200: "#231f20"
      },

    },
    screens: {
      xs: "250px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      height: {
        '100': '25rem',
        '120': '30rem',
        '140': '35rem',
        '160': '40rem',
        '1v': '1vmin',
        '2v': '2vmin',
        '3v': '3vmin',
        '4v': '4vmin',
        '5v': '5vmin',
        '6v': '6vmin',
        '7v': '7vmin',
        '8v': '8vmin',
        '9v': '9vmin',
        '10v': '10vmin',
        '11v': '11vmin',
        '12v': '12vmin',
        '13v': '13vmin',
        '14v': '14vmin',
        '15v': '15vmin'
      },
      width: {
        '1v': '1vmin',
        '2v': '2vmin',
        '3v': '3vmin',
        '4v': '4vmin',
        '5v': '5vmin',
        '6v': '6vmin',
        '7v': '7vmin',
        '8v': '8vmin',
        '9v': '9vmin',
        '10v': '10vmin',
        '11v': '11vmin',
        '12v': '12vmin',
        '13v': '13vmin',
        '14v': '14vmin',
        '15v': '15vmin'
      },
      fontSize: {
        'xs': '.75rem', // Example sizes
        'sm': '.875rem',
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
        // Add more sizes as needed
      },
    },
  },
  plugins: [],
};