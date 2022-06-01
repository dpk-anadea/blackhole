<template>
  <section class="order-wrapper">
    <h1 class="title">Order</h1>

    <div class="order-wrapper" v-if="currentOrderItems?.length">
      <section
        class="order-section"
        v-for="item in currentOrderItems"
        :key="item.id">
        <div class="order-content product-name">{{ item.product.name }}</div>
        <div class="order-content">Cost: ${{ item.product.cost }}</div>
        <div class="order-content">Quantity: {{ item.quantity }}</div>
      </section>
    </div>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'

  export default {
    name: 'MyOrder',
    computed: {
      ...mapGetters({
        user: get.CURRENT_USER,
        orders: get.ORDERS
      }),
      orderId() {
        return this.$route.query.orderId
      },
      currentOrderItems() {
        return this.orders.find((el) => el.id === +this.orderId)?.orderItems
      }
    },
    async created() {
      console.log(this.orders)
      if (!this.orders.length) {
        await this[action.GET_ORDERS](this.user.id)
      }
    },
    methods: {
      ...mapActions([action.GET_ORDERS])
    }
  }
</script>

<style scoped>
  .order-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 50px;

    background-color: #222222;
  }

  .title {
    margin-bottom: 30px;

    font-size: 38px;
    font-weight: 500;
  }

  .order-wrapper {
    width: 100%;
  }

  .order-section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 60px;
    width: 100%;
    padding: 0 60px;
    margin-bottom: 15px;

    border-radius: 15px;
    box-shadow: 3px -1px 6px black;

    background-color: #1d1c1c;
  }

  .product-name {
    width: 50%;
  }
</style>
