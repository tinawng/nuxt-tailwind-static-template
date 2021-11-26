module.exports = {
  darkMode: false,
  theme: {
    extend: {
      colors: {},
      fontSize: {
        '2xs': '.65rem',
      },
      height: {
        'fit': 'fit-content',
        '18': '4.5rem',
      },
      width: {
        'fit': 'fit-content',
        '18': '4.5rem',
      },
      zIndex: {
        '-1': '-1',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],

  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
}
