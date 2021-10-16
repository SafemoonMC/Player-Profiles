module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mc: {
          light: '#1ffff1',
          dark: '#9bfffc',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
