/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      slate: colors.slate,
      gray: colors.gray,
      zinc: colors.zinc,
      neutral: colors.neutral,
      stone: colors.stone,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      fushsia: colors.fushsia,
      pink: colors.pink,
      rose: colors.rose,
      black: colors.black,
      white: colors.white,
      brown: {
        100: "#974",
        200: "#2b2521",
        300: '#8d6b3b',
        400: '#725216'
      }
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
        '15v': '15vmin'
      },
    },
  },
  plugins: [],
};