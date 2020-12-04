<template>
  <div class="container">
    <div class="main-content work-post">
      <div class="work-post__header">
        <drop-card class="work-post__image-wrapper" :accent="post.accent">
          <nuxt-image
            class="work-post__image"
            :placeholder="true"
            :src="post.cover_image"
          />
        </drop-card>
        <div class="work-post__title-content">
          <h3 class="work-post__title">{{ post.title }}</h3>
          <base-link
            v-if="post.project_url"
            class="work-post__external-link"
            :url="post.project_url"
          >
            View Project ->
          </base-link>
          <base-link
            v-if="post.code_url"
            class="work-post__external-link"
            :url="post.code_url"
          >
            View Code ->
          </base-link>
        </div>
      </div>
      <nuxt-content class="work-post__content" :document="post" />

      <base-link class="back-link" url="/work">
        {{ arrow }} Back to all work
      </base-link>
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
  data() {
    return {
      arrow: '<-',
    }
  },
  head() {
    return {
      title: `${this.post.title} - JamesPeilow.com`,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: this.post.cover_image,
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 860px;
  margin: 0 auto $SPACING_3XL;
  padding: 0 $SPACING_M;

  @include mq($from: medium) {
    padding: 0 $SPACING_3XL;
    width: 75%;
  }

  @include mq($from: large) {
    padding: 0 $SPACING_3XL;
    width: 66.66%;
  }
}

.work-post {
  &__header {
    margin-bottom: $SPACING_XL;
    padding-bottom: $SPACING_L;
    border-bottom: 4px solid var(--theme-accent6);
  }

  &__image {
    display: block;
  }

  &__image-wrapper {
    margin: 0 0 $SPACING_3XL;
  }

  @include mq($from: medium) {
    &__header {
      padding-bottom: $SPACING_XL;
    }

    &__title-content {
      align-items: flex-end;
      display: flex;
      justify-content: space-between;
    }

    &__external-link {
      flex-shrink: 0;
    }
  }
}
</style>
