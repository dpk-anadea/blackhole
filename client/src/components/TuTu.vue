<template>
  <section>
    <h1>tata nana</h1>
    {{ users }}
  </section>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import { action } from '@/store/constants'

  export default {
    name: 'TuTu',
    created() {
      this[action.GET_USERS]()
    },
    computed: {
      ...mapState(['users'])
    },
    methods: {
      ...mapActions([action.GET_USERS])
    }
  }
</script>
