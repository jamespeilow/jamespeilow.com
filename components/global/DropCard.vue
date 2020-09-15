<template>
  <div class="drop-card" :class="classes" :style="cardStyles">
    <div class="drop-card__content">
      <grid-circles v-if="gridCircles" :rotate="gridCirclesRotation" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    accent: {
      type: String,
      default: '5',
    },
    gridCircles: {
      type: Boolean,
      default: false,
    },
    gridCirclesRotation: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    cleanValue() {
      const defaultValue = '5'
      const numberValue = Number(this.accent)
      if (
        numberValue.toString === 'NaN' ||
        numberValue < 0 ||
        numberValue > 7
      ) {
        return defaultValue
      }
      return this.accent
    },

    classes() {
      return this.accent === 'none' ? 'card--no-accent' : ''
    },

    cardStyles() {
      return {
        '--accent': `var(--theme-accent${this.cleanValue})`,
      }
    },
  },
}
</script>

<style lang="scss">
.drop-card {
  --accent: var(--theme-accent5);
  $grid-circle-offset: 1.75rem;
  $grid-circle-size: 4.5rem;

  color: $COLOR_TEXT_DARK;
  margin-left: $grid-circle-offset;
  margin-right: $grid-circle-offset;
  position: relative;

  &::before {
    background-color: var(--accent);
    border-radius: $SPACING_XS;
    content: '';
    height: 100%;
    left: $SPACING_XS;
    position: absolute;
    top: $SPACING_XS;
    width: 100%;
    z-index: -1;
  }

  &__content {
    background-color: $COLOR_BACKGROUND_WHITE;
    border-radius: $SPACING_XS;
    overflow: hidden;
  }

  .grid-circles {
    height: $grid-circle-size;
    left: -$grid-circle-offset;
    position: absolute;
    top: -$grid-circle-offset;
    width: $grid-circle-size;
  }

  &#{&}--no-accent {
    &::before {
      content: none;
    }
  }

  @include mq($from: medium) {
    $grid-circle-offset: 3.75rem;

    .grid-circles {
      height: $grid-circle-size * 2;
      left: -$grid-circle-offset;
      position: absolute;
      top: -$grid-circle-offset;
      width: $grid-circle-size * 2;
    }
  }
}
</style>
