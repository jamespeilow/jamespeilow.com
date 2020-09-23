<template>
  <div class="container">
    <h2
      class="section-contact__title h1 feature-bar feature-bar--right-full"
      style="--bar-accent: var(--theme-accent3)"
    >
      work
    </h2>

    <div class="main-content">
      <div v-for="(post, index) in posts" :key="post.slug">
        <portfolio-card :post="post" :image-right="index % 2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    // const slug = 'blog/setting-up-netlify-cms-with-nuxt-content'
    const posts = await $content('portfolio')
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Content not found' })
      })
    return {
      posts,
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
