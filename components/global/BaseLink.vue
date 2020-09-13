<template>
  <component :is="element" v-bind="linkOptions">
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
    newWindow: {
      type: Boolean,
      default: false,
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
     * Returns all properties for the link element to base in v-bind.
     */
    linkOptions() {
      return {
        href: this.href,
        to: this.to,
        target: this.newWindow ? '_blank' : false,
        rel: this.newWindow ? 'noopener noreferrer' : false,
      }
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
