module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lime: {
          1: '#0f1409',
          2: '#606c38',
          3: '#fefae0',
          4: '#dda15e',
          5: '#bc6c25',
          6: '#7c8b49'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}