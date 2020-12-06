<template>
  <nuxt-link
    v-if="element === 'nuxt-link'"
    class="button"
    :class="classes"
    :disabled="disabled"
    :to="to"
  >
    <slot>Button Text</slot>
    <span v-if="arrow" class="button__arrow"> -> </span>
  </nuxt-link>

  <component
    :is="element"
    v-else
    class="button"
    :class="classes"
    :disabled="disabled"
    :href="href"
    :to="to"
    @click="handleClickEvent"
  >
    <slot>Button Text</slot>
    <span v-if="arrow" class="button__arrow"> -> </span>
  </component>
</template>

<script>
export default {
  props: {
    block: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    arrow: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'm',
    },
    variant: {
      type: String,
      default: 'primary',
    },
    url: {
      type: String,
      default: '',
    },
  },
  computed: {
    /**
     * Compute classes.
     */
    classes() {
      const props = {
        'button--primary': this.variant === 'primary',
        'button--secondary': this.variant === 'secondary',

        'button--block': this.block,
        'button--disabled': this.disabled,
        'button--outlined': this.outlined,
      }

      return Object.keys(props)
        .filter((key) => {
          return props[key]
        })
        .join(' ')
    },

    /**
     * Compute the element condition.
     * - Based on link existence and link type.
     * @returns {String}
     */
    element() {
      if (this.url) {
        if (!this.externalLink) {
          return 'nuxt-link'
        }

        return 'a'
      }

      return 'button'
    },

    /**
     * Computes if provided link is external.
     * @returns {Boolean}
     */
    externalLink() {
      const regex = /(mailto:|tel:|http(s):)/g
      return regex.test(this.url)
    },

    /**
     * Returns the `href` attribute value.
     * - Returns if element is not `button`.
     */
    href() {
      return this.element !== 'button' ? this.url : false
    },

    /**
     * Returns the `to` attribute value.
     * - Only returns if element is `n-link`.
     */
    to() {
      return this.element === 'nuxt-link' ? this.url : false
    },
  },

  methods: {
    /**
     * Handles the default click event.
     */
    handleClickEvent() {
      if (this.to) {
        this.$router.push({ path: this.to })
      }
    },
  },
}
</script>

<style lang="scss">
.button {
  $parent: &;
  @include button-reset;

  align-items: center;
  background-color: $COLOR_BACKGROUND_WHITE;
  border: 2px solid transparent;
  color: $COLOR_TEXT_DARK;
  display: inline-flex;
  font-family: $FONT_BODY;
  font-size: $MS-1;
  font-weight: $WEIGHT_BOLD;
  justify-content: center;
  line-height: $LINE_HEIGHT_S;
  min-width: 150px;
  padding: $SPACING_S $SPACING_XL;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &__arrow {
    margin-left: $SPACING_XS;
    transition: transform $TIMING_BASE $EASING_EASE;
  }

  &:visited {
    color: $COLOR_TEXT_DARK;
  }

  &:hover,
  &:focus {
    cursor: pointer;

    #{$parent}__arrow {
      transform: translateX(0.25rem);
    }
  }

  /**
  * Modifiers
  */
  &#{&}--outlined {
    border-color: $THEME_SHADE0;
    background-color: $COLOR_BACKGROUND_WHITE;
  }

  &#{&}--block {
    width: 100%;
  }

  &#{&}--primary {
    background-color: $THEME_ACCENT7;

    &#{$parent}--outlined {
      background-color: $COLOR_BACKGROUND_WHITE;
      border-color: $THEME_ACCENT7;
    }
  }

  &#{&}--secondary {
    background-color: $THEME_ACCENT2;

    &#{$parent}--outlined {
      background-color: $COLOR_BACKGROUND_WHITE;
      border-color: $THEME_ACCENT2;
    }
  }

  /**
  * State
  */
  &#{$parent}--disabled,
  &[disabled='true'] {
    background-color: $THEME_SHADE7;
    color: $COLOR_TEXT_LIGHT;

    &:hover {
      cursor: not-allowed;

      #{$parent}__arrow {
        transform: none;
      }
    }
  }
}
</style>
