<template>
  <div class="portfolio-card">
    <div v-if="!imageRight" class="portfolio-card__image">
      <drop-card>
        <img :src="post.cover_image" />
      </drop-card>
    </div>

    <div class="portfolio-card__content" :class="{ 'image-right': imageRight }">
      <h3 class="portfolio-card__title">
        {{ post.title }}
      </h3>

      <p class="portfolio-card__excerpt">
        {{ post.description }}
      </p>

      <base-button
        v-if="post.project_url"
        :url="post.project_url"
        variant="secondary"
        target="_blank"
      >
        View Project
      </base-button>
      <base-button :url="`work/${post.slug}`">Find out more</base-button>
    </div>

    <div v-if="imageRight" class="portfolio-card__image">
      <drop-card>
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
  }

  &__title {
    display: inline-block;
    margin-bottom: $SPACING_S;

    &::after {
      background-color: $THEME_ACCENT2;
      content: '';
      display: block;
      height: 4px;
      margin-top: $SPACING_XS;
      width: 100%;
    }
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