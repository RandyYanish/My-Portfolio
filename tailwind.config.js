/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        grey: {
          light: '#D7D7D7',
          DEFAULT: '#4D4D4D',
          dark: '#000000',
        },
        steel: {
          light: '#D9DEDF',
          DEFAULT: '#74868A',
          dark: '#363E40',
        },
        metal: {
          light: '#D4E0E4',
          DEFAULT: '#58808E',
          dark: '#26383E',
        },
        ice: {
          light: '#DAE3F2',
          DEFAULT: '#4773C1',
          dark: '#213861',
        },
        blue: {
          light: '#DBD9FF',
          DEFAULT: '#0C00FE',
          dark: '#050064',
        },
        purple: {
          light: '#E6DCFC',
          DEFAULT: '#723BED',
          dark: '#2E0B7B',
        },
        magenta: {
          light: '#F9DFF4',
          DEFAULT: '#A9238F',
          dark: '#561249',
        },
        yellow: {
          light: '#F6FECE',
          DEFAULT: '#CEF707',
          dark: '#A7C800',
        },
      },
    },
  },
  plugins: [],
}
