<template>
  <div class="homepage">
    <section-hero :title="page.hero.title" :subtitle="page.hero.subtitle" />
    <section-about :section-data="page.about" />
    <div class="container">
      <div class="main-content">
        <drop-card accent="2">
          <div style="padding: 2rem">
            <h2>Contact</h2>
            <div v-for="link in page.contact.social" :key="link.url">
              <base-link :url="link.url" target="_blank">
                {{ link.title }}
              </base-link>
            </div>
            <input placeholder="name" name="name" type="text" />
            <input placeholder="email" name="email" type="email" />
            <base-button>Submit</base-button>
          </div>
        </drop-card>
      </div>
    </div>
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
