<template>
  <div class="container">
    <div class="main-content">
      <drop-card :accent="post.accent">
        <h3>{{ post.title }}</h3>
        <img :src="post.cover_image" />
        <base-button v-if="post.project_url" :url="post.project_url">
          View Project
        </base-button>
        <nuxt-content :document="post" />
      </drop-card>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    // const slug = 'blog/setting-up-netlify-cms-with-nuxt-content'
    const slug = params.slug
    const post = await $content('portfolio', slug)
      .fetch()
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err)
        error({ statusCode: 404, message: 'Content not found' })
      })
    return {
      post,
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
