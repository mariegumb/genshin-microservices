const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      sky: colors.sky,
      orange: colors.orange,
      indigo: colors.indigo,
      purple: colors.purple,
      cyan: colors.cyan,
      green: colors.green,
      emerald: colors.emerald,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
