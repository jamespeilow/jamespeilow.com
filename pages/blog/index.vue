<template>
  <div class="blog-landing container">
    <h2
      class="blog-landing__title h1 feature-bar feature-bar--left-full"
      style="--bar-accent: var(--theme-accent5)"
    >
      blog
    </h2>

    <div class="main-content">
      <div class="blog-landing__grid">
        <drop-card v-for="post in posts" :key="post.slug" :accent="post.accent">
          <base-link
            class="blog-landing__item blog-item ratio-1-1"
            :url="post.path"
          >
            <div class="blog-item__wrapper">
              <span v-if="post.readingTime" class="blog-item__read-time label">
                {{ post.readingTime.text }}
              </span>
              <h3 class="blog-item__title">{{ post.title }}</h3>
            </div>
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
<style lang="scss">
.blog-landing {
  &__title {
    margin-bottom: $LAYOUT_S;
  }

  &__grid {
    display: grid;
    gap: $SPACING_3XL;
    width: 100%;
  }

  .drop-card {
    margin: 0;
  }

  &__item,
  &__item:visited {
    display: flex;
    color: $COLOR_TEXT_DARK;
    text-decoration: none;
  }

  .blog-item__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: $SPACING_3XL $SPACING_XL;
  }

  .blog-item__title {
    margin-top: auto;
  }

  @include mq($from: small) {
    &__grid {
      grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    }
  }

  @include mq($from: medium) {
    &__grid {
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }

    .drop-card {
      margin-left: $SPACING_M;
    }
  }

  @include mq($from: wide) {
    &__grid {
      grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    }

    .blog-item__wrapper {
      padding: $SPACING_3XL $SPACING_XL $LAYOUT_S;
    }
  }
}

.main-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
