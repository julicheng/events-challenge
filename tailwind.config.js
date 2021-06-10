module.exports = {
  purge: [
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/containers/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  darkMode: 'class', // or 'media' or 'class'
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
