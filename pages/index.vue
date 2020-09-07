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
