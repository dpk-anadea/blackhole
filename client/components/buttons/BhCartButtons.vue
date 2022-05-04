<template>
  <div class="buttons-container">
    <BhBaseButton class="continue-shopping" @click="goToShopping">
      Continue Shopping
    </BhBaseButton>
    <BhBaseButton class="check-out">Check Out</BhBaseButton>
  </div>
</template>

<script>
  import BhBaseButton from '@/components/buttons/BhBaseButton'

  export default {
    name: 'BhCartButtons',
    components: {
      BhBaseButton
    },
    methods: {
      goToShopping() {
        this.$router.push({ name: 'products' })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .buttons-container {
    display: flex;
  }

  .continue-shopping {
    background-color: #888888;
    margin-right: 10px;

    &:hover {
      background-color: #636363;
    }
  }
</style>
