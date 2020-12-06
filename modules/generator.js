/**
 * Generator function for pulling crawled dynamic routes into sitemap
 * - Source: https://github.com/andynoir/artcile-nuxt-dynamic-sitemap-no-ts/blob/main/modules/generator.js
 * - Uses NUXT_ENV_EXCLUDE_ROUTES comma separated env variable for excluded routes.
 * - Added as a build module in `nuxt.config.js`
 */
const generator = function () {
  this.nuxt.hook('generate:done', async (context) => {
    const routesToExclude = process.env.NUXT_ENV_EXCLUDE_ROUTES
      ? process.env.NUXT_ENV_EXCLUDE_ROUTES.split(',')
      : []
    const allRoutes = await Array.from(context.generatedRoutes)
    const routes = await allRoutes.filter(
      (route) => !routesToExclude.includes(route)
    )
    this.nuxt.options.sitemap.routes = await [...routes]
  })
}

export default generator
