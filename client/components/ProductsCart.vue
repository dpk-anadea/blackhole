<template>
  <section v-if="products" class="cart-section">
    <h1 class="title">Shopping Cart</h1>

    <p class="hint">Review your order below and click checkout to continue!</p>

    <BhCartButtons @check-out="goToPay" />

    <div class="products">
      <div v-for="product in products" :key="product.id" class="product">
        <div class="product-image">image</div>
        <div class="product-name">{{ product.name }}</div>
        <div class="product-count">
          <BhCountControl
            :count="product.count"
            @remove-product="removeProduct(product.id)"
            @update-count="(value) => updateCount(value, product)" />
        </div>
        <div class="product-cost">${{ getCost(product) }}</div>
      </div>
    </div>

    <div class="total">${{ totalCost }}</div>

    <BhCartButtons class="cart-buttons" @check-out="goToPay" />
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'
  import BhCartButtons from '@/components/buttons/BhCartButtons'
  import BhCountControl from '@/components/buttons/BhCountControl'

  export default {
    name: 'ProductCart',
    components: {
      BhCartButtons,
      BhCountControl
    },
    computed: {
      ...mapGetters({ products: get.CART }),
      totalCost() {
        return (
          this.products.reduce(
            (prev, curr) => prev + +curr.cost * curr.count,
            0
          ) || 0
        )
      }
    },
    async created() {
      if (!this.products) {
        await this[action.GET_PRODUCTS]()
      }
    },
    methods: {
      ...mapActions([
        action.ADD_PRODUCT_TO_CART,
        action.DELETE_PRODUCT_FROM_CART,
        action.GET_PRODUCTS,
        action.POST_STRIPE
      ]),
      getCost(product) {
        return +product.cost * product.count
      },
      updateCount(value, product) {
        product.count = value
        this[action.ADD_PRODUCT_TO_CART](product)
      },
      removeProduct(productId) {
        this[action.DELETE_PRODUCT_FROM_CART](productId)
      },
      async goToPay() {
        const paymentName = this.products.reduce(
          (prev, curr) => prev.name + ', ' + curr.name
        )
        console.log('paymentName', paymentName)
        await this[action.POST_STRIPE]({
          name: paymentName,
          cost: this.totalCost
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cart-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1200px;
    width: 100%;
    padding: 30px 20px 50px;
    margin: 0 auto;
  }

  .title {
    font-size: 38px;
    font-weight: 500;
  }

  .hint {
    margin: 10px 0 25px;

    opacity: 0.7;

    font-size: 22px;
    font-weight: 300;
  }

  .products {
    display: flex;
    flex-direction: column;

    width: 100%;
    margin: 20px 0 40px;
  }

  .product {
    display: flex;

    padding: 20px;

    font-weight: 300;

    & > :not(:last-child) {
      margin-right: 40px;
    }

    &-image {
      width: 100px;
    }
    &-name {
      flex-grow: 1;
    }
    &-count {
      width: 90px;
    }
    &-cost {
      width: 160px;

      font-size: 20px;
      text-align: right;
    }
  }

  .total {
    width: 100%;
    margin-bottom: 40px;

    text-align: right;
    font-size: 28px;
    font-weight: 500;
  }

  .cart-buttons {
    width: 100%;
    justify-content: flex-end;
  }
</style>
