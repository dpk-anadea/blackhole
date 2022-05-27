<template>
  <section class="orders-wrapper">
    <h1 class="title">Orders</h1>

    <table class="table">
      <thead>
        <tr>
          <th>Id link</th>
          <th>Date</th>
          <th>Payment amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orderTest" :key="item.id">
          <td class="active-id-link">{{ item.id }}</td>
          <td>{{ item.created_at }}</td>
          <td>{{ item.total_cost }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Orders',
    computed: {
      ...mapGetters({ user: get.CURRENT_USER })
    },
    async created() {
      await this[action.GET_ORDERS](this.user.id)
    },
    methods: {
      ...mapActions([action.GET_ORDERS])
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
  }

  .title {
    margin-bottom: 30px;

    font-size: 38px;
    font-weight: 500;
  }

  .active-id-link {
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
