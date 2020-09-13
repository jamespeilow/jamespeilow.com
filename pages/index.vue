<template>
  <div class="homepage">
    <section-hero :title="page.hero.title" :subtitle="page.hero.subtitle" />
    <section-about :section-data="page.about" />
    <section-contact :section-data="page.contact" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    // const slug = 'blog/setting-up-netlify-cms-with-nuxt-content'
    const slug = 'homepage'
    const page = await $content(slug)
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Content not found' })
      })
    return {
      page,
    }
  },
}
</script>
<style lang="scss" scoped>
.main-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
