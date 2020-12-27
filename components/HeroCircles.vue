<template>
  <svg
    ref="heroCircles"
    class="hero-circles"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 415 504"
    width="415"
    height="504"
  >
    <path
      fill="#A6DF8B"
      d="M206 132a42 42 0 11-84 0 42 42 0 0184 0z"
      opacity="0.9"
    />
    <path
      fill="#73DEFF"
      d="M268 222a23 23 0 11-46 0 23 23 0 0146 0zM117 58a23 23 0 11-46 0 23 23 0 0146 0z"
      opacity="0.9"
    />
    <path
      fill="#F2A680"
      d="M314 116a23 23 0 11-46 0 23 23 0 0146 0z"
      opacity="0.9"
    />
    <path
      fill="#4EF9C6"
      d="M415 235a39 39 0 11-78 0 39 39 0 0178 0z"
      opacity="0.9"
    />
    <path
      fill="#F3DE8A"
      d="M333 129a16 16 0 11-32 0 16 16 0 0132 0z"
      opacity="0.9"
    />
    <path
      fill="#F59597"
      d="M330 290a16 16 0 11-32 0 16 16 0 0132 0z"
      opacity="0.9"
    />
    <path
      fill="#FFFFFF"
      d="M349 65a16 16 0 11-32 0 16 16 0 0132 0z"
      opacity="0.9"
    />
    <path
      fill="#FF6699"
      d="M271 30a30 30 0 11-60 0 30 30 0 0160 0zM140 234a18 18 0 11-36 0 18 18 0 0136 0z"
      opacity="0.9"
    />
    <path
      fill="#A6DF8B"
      d="M206 440a38 38 0 10-58 51 38 38 0 0058-51z"
      opacity="0.9"
    />
    <path
      fill="#73DEFF"
      d="M114 300a21 21 0 10-31 28 21 21 0 0031-28z"
      opacity="0.9"
    />
    <path
      fill="#F2A680"
      d="M210 345a21 21 0 10-31 28 21 21 0 0031-28z"
      opacity="0.9"
    />
    <path
      fill="#4EF9C6"
      d="M101 338a36 36 0 10-53 47 36 36 0 0053-47z"
      opacity="0.9"
    />
    <path
      fill="#F3DE8A"
      d="M26 274a15 15 0 10-22 19 15 15 0 0022-19z"
      opacity="0.9"
    />
    <path
      fill="#F59597"
      d="M116 216a15 15 0 10-22 20 15 15 0 0022-20z"
      opacity="0.9"
    />
    <path
      fill="#FFFFFF"
      d="M332 322a15 15 0 10-21 19 15 15 0 0021-19z"
      opacity="0.9"
    />
    <path
      fill="#FF6699"
      d="M330 431a27 27 0 10-41 37 27 27 0 0041-37z"
      opacity="0.9"
    />
  </svg>
</template>

<script>
import { debounce } from '@/scripts/utils/helpers'
export default {
  data() {
    return {
      windowWidth: null,
    }
  },
  mounted() {
    this.setCircleStyles()
    this.setResizeListener()
  },

  methods: {
    setResizeListener() {
      window.addEventListener('resize', debounce(this.handleResize, 200))
    },

    getRandomFromRange(min, max) {
      const range = max - min
      return (Math.random() * range + min).toFixed(1)
    },

    setCircleStyles() {
      this.windowWidth = window.innerWidth
      if (!this.$refs.heroCircles) return

      const circles = Array.from(
        this.$refs.heroCircles.querySelectorAll('path')
      )
      circles.forEach((circle, index) => {
        const delay = this.getRandomFromRange(index * -1, 0)
        const xTransform = this.getRandomFromRange(60, 80)
        const yTransform = this.getRandomFromRange(40, 60)
        circle.style.animationDelay = `${delay}s`
        circle.style.transformOrigin = `${xTransform}% ${yTransform}%`
      })
    },

    handleResize() {
      if (window.innerWidth === this.windowWidth) {
        return
      }
      this.setCircleStyles()
    },
  },
}
</script>

<style lang="scss">
.hero-circles {
  margin: 0 0 0 auto;
  max-height: 200px;
  padding-left: $SPACING_3XL;
  overflow: visible;
  width: 50%;

  > path {
    transform-origin: 50% 50%;
    animation: hero-spin 15s $EASING_EASE_IN_OUT infinite;
  }

  @keyframes hero-spin {
    0% {
      transform: rotate(1turn);
    }

    100% {
      transform: rotate(0);
    }
  }

  @include mq($from: small) {
    display: block;
    max-height: initial;
  }

  @media screen and (prefers-reduced-motion: reduce) {
    > path {
      animation: none;
    }
  }
}
</style>
