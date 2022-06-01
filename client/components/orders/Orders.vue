<template>
  <section class="orders-wrapper">
    <h1 class="title">My Account</h1>
    <h1 class="title order-title">Order History</h1>

    <div class="order-wrapper" v-if="orders.length">
      <section
        class="order-section"
        v-for="item in orders"
        :key="item.id"
        @click="navigateToOrder(item.id)">
        <div class="order-content">
          Date: {{ formattedDate(item.createdAt) }}
        </div>
        <div class="order-content">Payment amount: ${{ item.total_cost }}</div>
      </section>
    </div>

    <div v-else class="hint">You haven't placed any orders yet.</div>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'

  export default {
    name: 'MyOrders',
    computed: {
      ...mapGetters({ user: get.CURRENT_USER, orders: get.ORDERS })
    },
    async created() {
      if (!this.orders.length) {
        await this[action.GET_ORDERS](this.user?.id)
      }
    },
    methods: {
      ...mapActions([action.GET_ORDERS]),
      navigateToOrder(orderId) {
        this.$router.push({ name: 'Order', query: { orderId } })
      },
      formattedDate(date) {
        return new Date(date).toLocaleString()
      }
    }
  }
</script>

<style scoped>
  .orders-wrapper {
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

  .order-title {
    opacity: 0.7;

    align-self: flex-start;
  }

  .order-wrapper {
    width: 100%;
  }

  .order-section {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 100px;
    width: 100%;
    padding: 0 60px;
    margin-bottom: 15px;

    border-radius: 15px;
    box-shadow: 3px -1px 6px black;

    background-color: #1d1c1c;
  }

  .order-content {
    font-size: 18px;
  }

  .hint {
    align-self: flex-start;

    color: #dddddd;
  }
</style>
