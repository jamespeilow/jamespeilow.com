<template>
  <div class="container">
    <div class="page__grid">
      <h2
        class="page__title h1 feature-bar feature-bar--right"
        :style="headerBarStyle"
      >
        {{ page.title }}
      </h2>
      <grid-circles />
      <div class="main-content page">
        <nuxt-content class="page__content" :document="page" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const slug = params.slug
    const page = await $content('pages', slug)
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

  computed: {
    headerBarStyle() {
      if (!this.page.accent) {
        return {}
      }
      return {
        '--bar-accent': `var(--theme-accent${this.page.accent})`,
      }
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

.page {
  &__title {
    margin-bottom: $SPACING_S;
    grid-column: 2 / -2;
    text-align: left;
    padding: 0 $SPACING_M;
  }

  @include mq($from: medium) {
    grid-row-start: 2;

    &__grid {
      display: grid;
      grid-template-columns: 1fr 75% 1fr;
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
  display: none;

  @include mq($from: medium) {
    display: block;
    grid-row-start: 2;
    height: auto;
    margin: $SPACING_S auto 0;
    width: 75%;
  }
}
</style>
