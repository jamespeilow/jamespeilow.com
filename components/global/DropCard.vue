<template>
  <div class="drop-card" :class="classes" :style="cardStyles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    accent: {
      type: String,
      default: '5',
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

  background-color: $COLOR_BACKGROUND_WHITE;
  border-radius: $SPACING_XS;
  color: $COLOR_TEXT_DARK;
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

  &#{&}--no-accent {
    &::before {
      content: none;
    }
  }
}
</style>
