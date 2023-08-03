module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'scholarly-dark': '#2D3748',
        'scholarly-light': '#F7FAFC',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}