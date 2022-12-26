/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        // 'カラー名': 'カラーコード'
        'egg-ivory': '#f3eed5',
        'mistmos-green': '#d4dfbb',
        'soft-buff': '#e4af9b',
        'twilight-gray': '#dcd5c8',
        'sharp-gray': '#a2a2ad',
        'japan-sea': '#1f1e63',
        'vanilla-sweet': '#efe5cb',
        'rinen-bambino': '#c1d1e0',
        'marble-gray': '#bfc9bd',
        'lite-neptune': '#e6e5ef',
        'steam-black': '#3e3a3a',
        'stj-mist': '#ced7dc',
      },
    },
  },
  variants: {},
  plugins: []
}
