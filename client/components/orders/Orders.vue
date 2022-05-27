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
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Orders',

    data() {
      return {
        orderTest: [
          {
            id: 1,
            user_id: 2,
            total_cost: 100,
            created_at: '15.02.12',
            order_items: [
              {
                product_id: 1,
                order_id: 1,
                cost: 100,
                quantity: 2
              }
            ]
          },
          {
            id: 5,
            user_id: 2,
            total_cost: 200,
            created_at: '16.03.22',
            order_items: [
              {
                product_id: 1,
                order_id: 5,
                cost: 200,
                quantity: 3
              }
            ]
          }
        ]
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
