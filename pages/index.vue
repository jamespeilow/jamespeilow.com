<template>
  <div class="container">
    <div class="main-content">
      <h1 class="title">{{ page.hero.title }}</h1>
      <span class="subtitle-1">{{ page.hero.subtitle }}</span>

      <drop-card>
        <h3>{{ page.about.title }}</h3>
        <nuxt-content :document="page.about" />
        <img :src="page.about.image" />
      </drop-card>
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
