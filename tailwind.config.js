module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif'],
    },
    extend: {},
  },
  variants: {
    opacity: ({ after }) => after(['disabled']),
  },
  plugins: [],
};
