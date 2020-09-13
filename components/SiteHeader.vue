<template>
  <header class="site-header">
    <div class="container site-header__container">
      <site-logo class="site-header__logo" />

      <nav v-if="navItems.length" class="site-header__nav">
        <ul class="site-header__nav-list">
          <li
            v-for="item in navItems"
            :key="item.label"
            class="site-header__nav-item"
            :class="getItemAccent(item.accent)"
            :style="itemStyles(item)"
          >
            <base-link class="site-header__nav-link subtitle-1" :url="item.url">
              {{ item.label }}
            </base-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          label: 'work',
          url: '/work',
          accent: 'theme-accent0',
        },
        {
          label: 'blog',
          url: '/blog',
          accent: 'theme-accent4',
        },
        {
          label: 'uses',
          url: '/kitchen-sink',
        },
      ],
    }
  },

  methods: {
    itemStyles(item) {
      if (typeof item.accent === 'undefined') return
      return {
        '--accent': `var(--${item.accent})`,
      }
    },

    getItemAccent(accent) {
      if (!accent) return ''
      return `site-header__nav-item--accent${accent}`
    },
  },
}
</script>

<style lang="scss">
.site-header {
  padding: $SPACING_M 0;
  margin-bottom: $SPACING_XL;

  &__container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__nav-list {
    display: none;
    list-style: none;
  }

  &__nav-item {
    --accent: var(--theme-accent3);

    margin-left: $SPACING_XS;
    position: relative;

    &::after {
      content: '';
      border-radius: 50%;
      display: inline-block;
      width: $SPACING_2XS + $SPACING_3XS;
      height: $SPACING_2XS + $SPACING_3XS;
      background-color: var(--accent);
    }
  }

  &__nav-link {
    color: $COLOR_TEXT_WHITE;
    text-decoration: none;

    &:visited {
      color: $COLOR_TEXT_WHITE;
    }
  }

  @include mq($from: medium) {
    &__nav-list {
      display: flex;
    }
  }

  @include mq($from: medium) {
    &__nav-item {
      margin-left: $SPACING_4XL;
    }
  }
}
</style>
