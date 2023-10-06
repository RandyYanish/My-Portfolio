/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  tailwindConfig: './styles/tailwind.config.js',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  darkMode: 'class',
  theme: {
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
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
