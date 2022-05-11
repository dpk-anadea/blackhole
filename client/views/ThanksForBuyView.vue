<template>
  <MainLayout>
    <template #main-content>
      <h3>Thank you for buy!</h3>
    </template>
  </MainLayout>
</template>

<script>
  import { mapActions } from 'vuex'
  import { action } from '@/store/constants'

  import MainLayout from '@/components/layout/MainLayout'

  export default {
    name: 'ThanksForBuyView',
    components: {
      MainLayout
    },
    async created() {
      await this[action.CLEAR_CART]()
    },
    methods: {
      ...mapActions([action.CLEAR_CART])
    }
  }
</script>
