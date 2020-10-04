<template>
  <div class="container">
    <div class="post__grid">
      <grid-circles :rotate="rotation" />
      <div class="main-content post">
        <h2 class="post__title h1">
          {{ post.title }}
        </h2>
        <div class="post__meta caption">
          <span class="post__date">
            {{ formattedDate }}
          </span>

          <span class="post__time">
            {{ post.readingTime.text }}
          </span>
        </div>

        <nuxt-content class="post__content" :document="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  async asyncData({ $content, params, error }) {
    // const slug = 'blog/setting-up-netlify-cms-with-nuxt-content'
    const slug = params.slug
    const post = await $content('blog', slug)
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

  computed: {
    formattedDate() {
      const date = new Date(this.post.date)
      return format(date, 'do MMM Y')
    },
    rotation() {
      return Math.floor(Math.random() * 4) * 90
    },
  },
}
</script>
<style lang="scss" scoped>
.main-content {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 860px;
  margin: 0 auto $SPACING_3XL;
  padding: 0 $SPACING_M;
}

.post {
  &__title {
    margin-bottom: $SPACING_S;
  }

  &__meta {
    margin-bottom: $SPACING_2XL;

    span::after {
      background-color: $THEME_ACCENT7;
      border-radius: 50%;
      content: '';
      display: inline-block;
      height: $SPACING_XS;
      margin: 0 $SPACING_M;
      width: $SPACING_XS;
    }

    span:last-of-type::after {
      content: none;
    }
  }

  @include mq($from: medium) {
    &__grid {
      display: grid;
      grid-template-columns: 1fr 75% 1fr;
      padding-top: $SPACING_5XL;
    }
  }

  @include mq($from: large) {
    &__grid {
      display: grid;
      grid-gap: $SPACING_M;
      grid-template-columns: 1fr 66.66% 1fr;
    }
  }
}

.grid-circles {
  height: 12.5%;
  width: 12.5%;
  margin: 0 $SPACING_M $SPACING_XS;

  @include mq($from: medium) {
    height: auto;
    margin: $SPACING_S auto 0;
    width: 75%;
  }
}
</style>
