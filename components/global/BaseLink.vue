<template>
  <component :is="element" :to="to" :href="href">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: '',
      required: true,
    },
  },

  computed: {
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
     * - Only returns if element is `nuxt-link`.
     */
    to() {
      return this.element === 'nuxt-link' ? this.url : false
    },
  },
}
</script>
