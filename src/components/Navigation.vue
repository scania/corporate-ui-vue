<template>
  <c-navigation>
    <router-link slot="primary-items" to="/home">home</router-link>
    <router-link slot="primary-items" to="/about" class="parent">about</router-link>
    <router-link slot="secondary-items" to="/contact">contact</router-link>

    <c-navigation slot="sub" v-bind:caption="parent.name" :active="items.length ? true : false" target="#/about">
      <router-link slot="primary-items" v-for="(item, index) in items" v-bind:to="item.path" v-bind:key="index" :active="current.childPath === item.path ? true : false">{{ item.path }}</router-link>
    </c-navigation>
  </c-navigation>
</template>

<script>
  export default {
    name: 'Navigation',
    data: () => ({
      current: {},
      parent: '',
      items: []
    }),
    methods: {
      setRoutes() {
        this.current = { ...this.$route, childPath: this.$route.path.split('/')[2], }
        this.parent = this.current.matched[0]

        const parentRoute = this.$router.options.routes.find(sub => sub.path === this.parent.path)

        this.items = (parentRoute.children || []).filter(item => item.name)
      }
    },
    mounted() {
      this.setRoutes()
      
      this.$router.afterEach(() => {
        this.setRoutes()
      })
    }
  }
</script>

<style scoped>
</style>