export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/styles/app'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/style-resources-module/
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/svg-module
    '@nuxtjs/svg',
  ],

  styleResources: {
    scss: ['@/styles/config/*.scss'],
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxt/image'],

  content: {
    liveEdit: false,
    markdown: {
      prism: {
        theme: '@/styles/prism-styles.css',
      },
    },
  },

  hooks: {
    'content:file:beforeInsert': async (document, database) => {
      // Get reading time
      if (document.extension === '.md') {
        const readingTime = require('reading-time')(document.text)
        document.readingTime = readingTime
      }

      // Parse json bodys as markdown
      if (document.extension === '.json' && document.body) {
        const data = await database.markdown.toJSON(document.body)

        Object.assign(document, data)
      }

      if (document.slug === 'homepage') {
        const sections = Object.keys(document)
        await sections.forEach(async (key) => {
          if (document[key].body) {
            const formatted = await database.markdown.toJSON(document[key].body)

            Object.assign(document[key], formatted)
          }
        })
      }
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
