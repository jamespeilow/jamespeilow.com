<template>
  <footer class="site-footer">
    <div class="container">
      <div class="site-footer__wrapper">
        <nuxt-link class="site-footer__site-name h4" to="/">
          james peilow
        </nuxt-link>

        <ul class="site-footer__linklist">
          <li
            v-for="link in links"
            :key="link.label"
            class="site-footer__linklist-item caption"
          >
            <base-link :url="link.url" class="link-text">
              {{ link.label }}
            </base-link>
          </li>
        </ul>

        <span class="site-footer__copyright label">
          (c) {{ new Date().getFullYear() }}
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          label: 'Work',
          url: '/work',
        },
        {
          label: 'uses',
          url: '/uses',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.site-footer {
  margin-top: $LAYOUT_S;
  padding: 1rem;
  position: relative;
  text-align: center;

  &::before {
    background-color: $THEME_ACCENT5;
    content: '';
    display: block;
    height: 4px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 198px;
  }

  &__wrapper {
    max-width: 632px;
    margin: 0 auto;
  }

  &__site-name {
    display: inline-block;
    color: $COLOR_TEXT_WHITE;
    margin: $SPACING_M 0;
    text-decoration: none;

    &:visited {
      color: $COLOR_TEXT_WHITE;
    }
  }

  &__linklist {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    list-style: none;
    margin: 0 0 $SPACING_XS;
  }

  &__linklist-item {
    display: block;
    margin: 0 $SPACING_S $SPACING_XS;
    text-transform: lowercase;
  }

  @include mq($from: medium) {
    &__linklist-item {
      margin: 0 $SPACING_3XL $SPACING_XS;
    }
  }
}
</style>
