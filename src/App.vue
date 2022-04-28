<template>
  <div id="app">
    <nav-bar />
    <landing-page />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    LandingPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
