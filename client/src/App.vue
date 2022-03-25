<template>
  <HomePage msg="Welcome to Your Vue.js App" />
</template>

<script>
  import HomePage from './views/HomePage.vue'

  export default {
    name: 'App',
    components: {
      HomePage
    }
  }
</script>

<style>
  body {
    margin: 0;
    font-family: 'Roboto', 'Arial', sans-serif;
  }
</style>
