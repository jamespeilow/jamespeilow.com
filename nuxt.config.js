const baseUrl = process.env.BASE_URL || 'http://localhost:3000'

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
    title: 'James Peilow',
    meta: [
      { charset: 'utf-8' },
      { lang: 'en' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'The personal website of James Peilow - London-based front-end developer currently working building great Shopify sites.',
      },
      {
        hid: 'og:image',
        name: 'og:image',
        content: `${baseUrl}/images/site-image.png`,
      },
      {
        name: 'msapplication-TileColor',
        content: '#232931',
      },
      {
        name: 'theme-color',
        content: '#232931',
      },
      {
        name: 'msapplication-config',
        content: '/favicons/browserconfig.xml',
      },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicons/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicons/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicons/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/favicons/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        color: '#232931',
        href: '/favicons/safari-pinned-tab.svg',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: ['@/styles/app'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [{ src: '~/plugins/vue-gtag', mode: 'client' }],
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
    '@/modules/generator',
  ],

  styleResources: {
    scss: ['@/styles/config/*.scss'],
  },

  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxt/content', '@nuxt/image', '@nuxtjs/sitemap'],

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
  build: {
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    },
  },
  env: {
    baseUrl,
    gtagID: process.env.GTAG_ID,
  },

  sitemap: {
    hostname: baseUrl,
  },
}
