<template>
  <router-view></router-view>
</template>

<script>
  import { mapActions } from 'vuex'
  import { action } from '@/store/constants'

  export default {
    computed: {
      accessToken() {
        return localStorage.getItem('token')
      }
    },
    created() {
      if (this.accessToken) {
        this[action.CHECK_AUTH]()
      }
    },
    methods: {
      ...mapActions([action.CHECK_AUTH])
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
</style>
