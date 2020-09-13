<template>
  <svg
    class="grid-circles"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    height="144"
    width="144"
    viewBox="0 0 144 144"
    :style="styleObject"
  >
    <circle cx="8" cy="8" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="8" cy="40" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="8" cy="72" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="8" cy="104" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="8" cy="136" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="104" cy="8" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="104" cy="40" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="104" cy="72" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="104" cy="104" r="8" fill="#4EF9C6" />
    <circle cx="104" cy="136" r="7" stroke="#FF6699" stroke-width="2" />
    <circle cx="40" cy="8" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="40" cy="40" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="40" cy="72" r="8" fill="#F3DE8A" />
    <circle cx="40" cy="104" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="40" cy="136" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="136" cy="8" r="8" fill="#A6DF8B" />
    <circle cx="136" cy="40" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="136" cy="72" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="136" cy="104" r="7" stroke="#E7E8E6" stroke-width="2" />
    <circle cx="136" cy="136" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="72" cy="8" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="72" cy="40" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="72" cy="72" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="72" cy="104" r="7" stroke="#73DEFF" stroke-width="2" />
    <circle cx="72" cy="136" r="7" stroke="#73DEFF" stroke-width="2" />
  </svg>
</template>

<script>
export default {
  props: {
    rotate: {
      type: Number,
      default: 0,
    },
  },

  computed: {
    styleObject() {
      const rotation = `${this.rotate}deg`

      return {
        transform: `rotate(${rotation})`,
      }
    },
  },
}
</script>
