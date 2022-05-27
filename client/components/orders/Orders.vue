<template>
  <section class="orders-wrapper">
    <h1 class="title">My Account</h1>
    <h1 class="title order-title">Order History</h1>

    <table v-if="orders.length" class="table">
      <thead>
        <tr>
          <th>Id link</th>
          <th>Date</th>
          <th>Payment amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td class="active-id-link" @click="navigateToOrder(item.id)">
            {{ item.id }}
          </td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.total_cost }}</td>
        </tr>
      </tbody>
    </table>

    <div v-else class="hint">You haven't placed any orders yet.</div>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Orders',
    computed: {
      ...mapGetters({ user: get.CURRENT_USER, orders: get.ORDERS })
    },
    async created() {
      await this[action.GET_ORDERS](this.user.id)
    },
    methods: {
      ...mapActions([action.GET_ORDERS]),
      navigateToOrder(id) {
        this.$router.push({ name: 'Order', query: { id } })
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

  .hint {
    align-self: flex-start;

    color: #dddddd;
  }

  .active-id-link {
    cursor: pointer;

    color: var(--link-color);
  }

  .table {
    width: 100%;
    margin-bottom: 20px;

    border: 1px solid #dddddd;
    border-collapse: collapse;
  }
  .table th {
    padding: 5px;

    border: 1px solid #dddddd;

    color: #000000;
    background: var(--primary-button-color);
    font-size: 18px;
  }
  .table td {
    padding: 5px;

    border: 1px solid #dddddd;
  }
</style>
