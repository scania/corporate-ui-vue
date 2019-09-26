<template>
  <c-header v-bind:site-name="name" site-url="/#/">
    <router-link slot="items" to="/global">global</router-link>
  </c-header>
</template>

<script>
  export default {
    name: 'Header',
    data: () => ({
      name: 'App'
    }),
  }
</script>

<style scoped>
</style>
