<template>
  <section class="section-contact">
    <div class="container">
      <h2
        class="section-contact__title h1 feature-bar feature-bar--right-full"
        style="--bar-accent: var(--theme-accent2)"
      >
        {{ sectionData.title }}
      </h2>

      <drop-card class="section-contact__card" accent="7" :grid-circles="true">
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
              <base-link
                class="section-contact__social-link"
                :url="item.url"
                :new-window="true"
              >
                <div class="section-contact__social-icon">
                  <div
                    v-html="
                      require(`~/assets/icons/${item.title.toLowerCase()}.svg?raw`)
                    "
                  />
                  <span class="visually-hidden">{{ item.title }}</span>
                </div>
              </base-link>
            </li>
          </ul>

          <form
            class="section-contact__form"
            name="homepage-contact"
            method="post"
            accept-charset="utf-8"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="homepage-contact" />

            <div class="form-field underline-input">
              <label for="name" class="visually-hidden">Name</label>
              <input
                id="name"
                class="underline-input"
                type="text"
                placeholder="Name"
                name="name"
              />
            </div>

            <div class="form-field underline-input">
              <label for="email" class="visually-hidden">Email</label>
              <input id="email" type="email" placeholder="Email" name="email" />
            </div>

            <div class="form-field form-field--full underline-input">
              <label for="message" class="visually-hidden">Message</label>
              <textarea id="message" name="message" placeholder="Message" />
            </div>

            <div
              class="form-field form-field--full section-contact__form-footer"
            >
              <base-button type="submit"> Submit </base-button>
            </div>
          </form>
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
    padding: $SPACING_3XL $SPACING_M;
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
    margin: 0 auto $SPACING_4XL;
    width: 75%;
  }

  &__social-link {
    background-color: $THEME_ACCENT4;
    border-radius: 50%;
    display: block;
    margin: 0 $SPACING_M $SPACING_S;
    height: 48px;
    width: 48px;
    padding: $SPACING_S;
    transition: background-color $TIMING_FAST $EASING_EASE;

    .icon {
      height: auto;
      width: 100%;
      transform: scale(1);
      transition: transform $TIMING_FAST $EASING_EASE;
    }

    &:hover {
      background-color: $THEME_ACCENT5;

      .icon {
        transform: scale(1.1);
      }
    }
  }

  &__form {
    display: grid;
    grid-gap: $SPACING_M;
    margin-bottom: $SPACING_XS;

    .form-field--full {
      grid-column: 1/2;
    }
  }

  &__form-footer {
    justify-self: center;
  }

  @include mq($from: medium) {
    &__wrapper {
      padding: $SPACING_3XL;
    }

    &__card {
      margin: auto;
      width: 66.66%;
    }

    &__form {
      grid-template-columns: 1fr 1fr;

      .form-field--full {
        grid-column: 1/3;
      }
    }
  }
}
</style>
>
