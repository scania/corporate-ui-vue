<template>
  <c-navigation>
    <router-link slot="primary-items" to="/home">home</router-link>
    <router-link slot="primary-items" to="/info" class="parent">info</router-link>

    <div class="dropdown" slot="secondary-items">
      <a class="dropdown-toggle" href="#" data-toggle="dropdown">User</a>

      <div class="dropdown-menu">
        <router-link slot="primary-items" to="/user/profile" class="dropdown-item">Profile</router-link>
        <router-link slot="primary-items" to="/user/setting" class="dropdown-item">Settings</router-link>
      </div>
    </div>

    <c-navigation slot="sub" v-bind:caption="parent.name" :active="active.children ? true : false" v-bind:target="active.path">
      <router-link
        slot="primary-items"
        v-for="(item, index) in active.children"
        v-bind:to="item.path"
        v-bind:key="index"
        :active="active.sub === item.path ? true : false">{{ item.path }}</router-link>
    </c-navigation>
  </c-navigation>
</template>

<script>
  export default {
    name: 'Navigation',
    data: () => ({
      parent: '',
      active: {}
    }),
    methods: {
      setRoutes() {
        this.parent = this.$route.matched[0]
        this.active = this.$router.options.routes.find(sub => sub.path === this.parent.path)

        // Add data about a sub routes section path
        this.active.sub = this.$route.path.split('/')[2]

        // Filter out empty route items such as redirects
        if(this.active.children) this.active.children = this.active.children.filter(item => item.name)
      }
    },
    mounted() {
      this.setRoutes()
      
      this.$router.afterEach(() => this.setRoutes())
    }
  }
</script>

<style scoped>
</style>