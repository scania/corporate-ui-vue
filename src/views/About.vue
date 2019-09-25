<template>
  <section>
    <div class="container">
      <h1>About the project</h1>
      <p>Here goes info info about the project</p>
    </div>
  </section>
</template>

<script>
  import AboutProject from './AboutProject.vue'
  import AboutTeam from './AboutProject.vue'

  export default {
    name: 'About',
    // children: [
    //   { path: 'project', component: AboutProject },
    //   { path: 'team', component: AboutTeam },

    //   { path: '', redirect: 'project' },
    // ] 
  }
</script>

<style scoped>
</style>
