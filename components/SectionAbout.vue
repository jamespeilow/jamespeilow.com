<template>
  <section class="section-about">
    <div class="container">
      <div class="section-about__wrapper">
        <div class="section-about__content">
          <h2 class="section-about__title h1 feature-bar feature-bar--right">
            {{ sectionData.title }}
          </h2>
          <nuxt-content class="section-about__body" :document="sectionData" />
        </div>
        <div class="section-about__image-wrapper">
          <drop-card
            :accent="7"
            :grid-circles="true"
            :grid-circles-rotation="180"
          >
            <img
              class="section-about__image"
              :src="sectionData.image"
              alt="Profile Image"
            />
          </drop-card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss">
.section-about {
  $grid-circle-offset: 1.75rem;
  $grid-circle-size: 4.5rem;

  padding: $LAYOUT_S 0;

  &__content {
    margin-bottom: $SPACING_3XL + $grid-circle-offset;
  }

  &__image-wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    max-width: 400px;
    margin: auto;
    padding-left: $grid-circle-offset;
    padding-right: $grid-circle-offset;
    position: relative;

    .grid-circles {
      height: $grid-circle-size;
      left: -$grid-circle-offset;
      position: absolute;
      top: -$grid-circle-offset;
      width: $grid-circle-size;
    }
  }

  &__image {
    display: block;
    border-radius: 8px;
  }

  &__title {
    margin-bottom: $SPACING_XL;
  }

  @include mq($from: medium) {
    $grid-circle-offset: 3.75rem;

    &__wrapper {
      display: flex;
    }

    &__content {
      width: 41.66%;
      margin-bottom: 0;
      margin-right: 8.33%;
    }

    &__image-wrapper {
      width: 50%;
      max-width: none;

      .grid-circles {
        height: $grid-circle-size * 2;
        left: -$grid-circle-offset;
        position: absolute;
        top: -$grid-circle-offset;
        width: $grid-circle-size * 2;
      }
    }
  }

  @include mq($from: large) {
    padding: $LAYOUT_M 0;
  }
}
</style>
