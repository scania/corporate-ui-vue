<template>
  <body>
    <c-theme name="scania" global="true"></c-theme>
    <Header />
    <Navigation />
    <c-content>
      <router-view></router-view>
    </c-content>
    <Footer />
  </body>
</template>

<script>
  import Header from './components/Header.vue'
  import Navigation from './components/Navigation.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'app',
    components: {
      Header,
      Navigation,
      Footer
    }
  }
</script>

<style>
</style>
