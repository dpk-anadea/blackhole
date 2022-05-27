<template>
  <section class="order-wrapper">
    <h1 class="title">Order</h1>
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
</style>
