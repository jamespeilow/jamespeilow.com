<template>
  <section class="section-hero">
    <div class="section-hero__bg-text h1" aria-hidden="true">{{ title }}</div>
    <div class="container">
      <div class="section-hero__wrapper">
        <div class="section-hero__content">
          <h2 class="section-hero__title">{{ title }}</h2>
          <span class="section-hero__subtitle">{{ subtitle }}</span>
        </div>
        <hero-circles />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'James Peilow',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.section-hero {
  display: flex;
  min-height: 350px;
  overflow: hidden;
  position: relative;

  &__bg-text {
    align-items: flex-end;
    display: flex;
    opacity: 0.02;
    padding: 0 $SPACING_M;
    position: absolute;
    line-height: 1;
    text-transform: lowercase;
    font-size: 33vw;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }

  &__wrapper {
    align-items: center;
    display: flex;
    height: 100%;
    padding: $LAYOUT_S 0;
  }

  &__title {
    font-size: $MS7;
    letter-spacing: $LETTER_SPACING_XL;
    line-height: 1;
    margin-bottom: $SPACING_L;
    text-transform: lowercase;
    width: 6ch;

    &::after {
      color: $THEME_ACCENT7;
      content: '.';
    }
  }

  &__subtitle {
    font-size: $MS1;
  }

  @include mq($from: medium) {
    min-height: 500px;

    &__bg-text {
      transform: translateY(20vw);
    }

    &__content {
      width: 41.66%;
    }

    &__title {
      font-size: $MS9;
    }
    &__subtitle {
      font-size: $MS3;
    }
  }

  @include mq($from: wide) {
    min-height: 750px;
  }
}
</style>
