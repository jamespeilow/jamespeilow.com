<template>
  <div class="container">
    <div class="main-content">
      <div v-for="post in posts" :key="post.slug">
        <drop-card :accent="post.accent">
          <base-link :url="post.path">
            <h3>{{ post.title }}</h3>
            <span class="caption">{{ post.date }}</span>
          </base-link>
        </drop-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    // const slug = 'blog/setting-up-netlify-cms-with-nuxt-content'
    const posts = await $content('blog')
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
