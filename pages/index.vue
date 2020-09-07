<template>
  <div class="container">
    <div class="main-content">
      <Logo />
      <h1 class="title">jamespeilow.com</h1>
      <div class="links">
        <base-button
          url="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Documentation
        </base-button>
        <base-button
          url="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </base-button>

        <base-button url="/kitchen-sink">Kitchen Sink</base-button>
      </div>
      <base-card> <h3>Blog post card example</h3> </base-card>
      <base-card accent="9">
        <div style="padding: 2rem">
          <h2>Contact</h2>
          <input placeholder="name" name="name" type="text" />
          <input placeholder="email" name="email" type="email" />
          <base-button>Submit</base-button>
        </div>
      </base-card>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.main-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
