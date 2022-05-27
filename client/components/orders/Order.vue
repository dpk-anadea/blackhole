<template>
  <section class="order-wrapper">
    <h1 class="title">Order</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Ordered product</th>
          <th>Product price</th>
          <th>Subtotal price</th>
          <th>Total price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders" :key="item.id">
          <td>
            {{ item.id }}
          </td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.total_cost }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Order',
    computed: {
      ...mapGetters({ user: get.CURRENT_USER, orders: get.ORDERS })
    },
    async created() {
      await this[action.GET_ORDERS](this.user.id)
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
  }

  .title {
    margin-bottom: 30px;

    font-size: 38px;
    font-weight: 500;
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
