
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    // title: process.env.npm_package_name || '',
    titleTemplate:  'コトラ合同会社 | %s',
    htmlAttrs: {
      lang: 'ja',
      prefix: 'og: http://ogp.me/ns#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'コトラ合同会社のサイトとなります。システム開発の請負い、社内システムの改善提案、プログラミング教育を行っております。' || '' },
      { hid: 'keywords', name: 'keywords', content: '受託開発,ITコンサルティング,プログラミング教育' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'コトラ合同会社' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://kotoragk.com/' },
      { hid: 'og:title', property: 'og:title', content: 'コトラ合同会社ホームページ' },
      { hid: 'og:description', property: 'og:description', content: '受託開発、ITコンサルティング、プログラミング教育を行っています。' },
      { hid: 'og:image', property: 'og:image', content: '/favicon.ico' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/constants.js',
    '~/plugins/axios',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/dayjs',
    ['@nuxtjs/google-gtag', {
      id: 'G-BL5PV6CW7Z',
      debug: true,
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  proxy: {
    '/hp/company': {
      target: 'https://autoarai.com',
      // target: 'http://127.0.0.1:8000',
      changeOrigin: true,
    },
    '/hp/news': {
      target: 'https://autoarai.com',
      // target: 'http://127.0.0.1:8000',
      changeOrigin: true,
    },
    '/hp/inquiry': {
      target: 'https://autoarai.com',
      // target: 'http://127.0.0.1:8000',
      changeOrigin: true,
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
