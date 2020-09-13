<template>
  <section class="section-contact">
    <div class="container">
      <h2
        class="section-contact__title h1 feature-bar feature-bar--right-full"
        style="--bar-accent: var(--theme-accent2)"
      >
        {{ sectionData.title }}
      </h2>

      <drop-card class="section-contact__card" accent="7">
        <div class="section-contact__wrapper">
          <ul
            v-if="sectionData.social.length > 0"
            class="section-contact__social-list"
          >
            <li
              v-for="item in sectionData.social"
              :key="item.url"
              class="section-contact__social-item"
            >
              <base-link class="section-contact__social-link" :url="item.url">
                <img :src="item.title.toLowerCase()" :alt="item.title" />
              </base-link>
            </li>
          </ul>

          <form class="section-contact__form">Form goes here..</form>
        </div>
      </drop-card>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    sectionData: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss">
.section-contact {
  &__wrapper {
    padding: $SPACING_3XL;
  }

  &__title {
    margin-bottom: $SPACING_4XL;
  }

  &__social-list {
    @include list-reset;

    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__social-link {
    display: block;
    margin: 0 $SPACING_M;

    img {
      border-radius: 50%;
    }
  }

  @include mq($from: medium) {
    &__card {
      margin: auto;
      width: 66.66%;
    }
  }
}
</style>
>
