<template>
  <div class="card" :class="classes">
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
    classes() {
      if (this.accent === 'none') return 'card--no-accent'
      return `card--accent${this.accent.toLowerCase()}`
    },
  },
}
</script>

<style lang="scss">
.card {
  background-color: $COLOR_BACKGROUND_WHITE;
  border-radius: $SPACING_XS;
  color: $COLOR_TEXT_DARK;
  position: relative;

  &::before {
    background-color: $THEME_ACCENT5;
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

  &#{&}--accent0 {
    &::before {
      background-color: $THEME_ACCENT0;
    }
  }
  &#{&}--accent1 {
    &::before {
      background-color: $THEME_ACCENT1;
    }
  }
  &#{&}--accent2 {
    &::before {
      background-color: $THEME_ACCENT2;
    }
  }
  &#{&}--accent3 {
    &::before {
      background-color: $THEME_ACCENT3;
    }
  }
  &#{&}--accent4 {
    &::before {
      background-color: $THEME_ACCENT4;
    }
  }
  &#{&}--accent5 {
    &::before {
      background-color: $THEME_ACCENT5;
    }
  }
  &#{&}--accent6 {
    &::before {
      background-color: $THEME_ACCENT6;
    }
  }
  &#{&}--accent7 {
    &::before {
      background-color: $THEME_ACCENT7;
    }
  }
}
</style>
