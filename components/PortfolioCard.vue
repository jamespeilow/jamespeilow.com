<template>
  <div class="portfolio-card">
    <div v-if="!imageRight" class="portfolio-card__image">
      <drop-card :accent="post.accent">
        <img :src="post.cover_image" />
      </drop-card>
    </div>

    <div class="portfolio-card__content" :class="{ 'image-right': imageRight }">
      <div class="portfolio-card__header-content" :style="cssProps">
        <h3 class="portfolio-card__title">
          {{ post.title }}
        </h3>

        <base-link
          v-if="post.project_url"
          class="portfolio-card__external-link"
          :url="post.project_url"
        >
          View Project ->
        </base-link>
      </div>

      <p class="portfolio-card__excerpt">
        {{ post.description }}
      </p>

      <base-button :url="`work/${post.slug}`">Find out more</base-button>
    </div>

    <div v-if="imageRight" class="portfolio-card__image">
      <drop-card :accent="post.accent">
        <img :src="post.cover_image" />
      </drop-card>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default() {
        return {}
      },
    },
    imageRight: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    cssProps() {
      const accentVar = this.post.accent
        ? `var(--theme-accent${this.post.accent})`
        : ''
      return {
        '--underline-accent': accentVar,
      }
    },
  },
}
</script>

<style lang="scss">
.portfolio-card {
  margin-bottom: $SPACING_5XL;

  &__image {
    margin-bottom: $SPACING_XL;

    .drop-card {
      margin: 0 $SPACING_XS 0 0;
    }

    img {
      display: block;
    }
  }

  &__title {
    display: inline-block;
  }

  &__header-content {
    --underline-accent: var(--theme-accent2);

    margin-bottom: $SPACING_S;

    &::after {
      background-color: var(--underline-accent);
      content: '';
      display: block;
      height: 4px;
      margin-top: $SPACING_XS;
      width: 100%;
    }
  }

  &__external-link {
    display: block;
  }

  &__excerpt {
    margin-bottom: $SPACING_S;
  }

  @include mq($from: medium) {
    align-items: flex-end;
    display: flex;
    margin-bottom: $LAYOUT_M;

    &__image {
      margin-bottom: 0;
      width: 50%;
    }

    &__content {
      width: 50%;
      padding-left: $LAYOUT_S;

      &.image-right {
        padding-left: 0;
        padding-right: $LAYOUT_S;
      }
    }

    &__excerpt {
      margin-bottom: $SPACING_M;
    }
  }

  @include mq($from: large) {
    &__image {
      width: 58.33%;
    }

    &__content {
      width: 41.66%;
    }
  }
}
</style>
