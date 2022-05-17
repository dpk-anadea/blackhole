<template>
  <BaseModal
    modal-frame-style="width: 700px; min-height: 200px;"
    @close="$emit('close')">
    <div class="pay-modal-wrapper">
      <h2 class="title">Pay with card</h2>
      <div class="pay-content">
        <div class="products-info">
          <div
            v-for="product in products"
            :key="`product-${product.id}`"
            class="product-row">
            <span>{{ product.name }}</span>
            <span>&nbsp; x{{ product.quantity }}</span>
          </div>
        </div>
        <div class="stripe-wrapper">
          <h4 class="total-cost">US ${{ totalCost }}</h4>
          <Stripe @pay="pay" />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'

  import BaseModal from '@/components/modals/BaseModal'
  import Stripe from '@/components/Stripe'

  export default {
    name: 'PayModal',
    components: {
      BaseModal,
      Stripe
    },
    props: {
      products: { type: Array, required: true },
      totalCost: { type: Number, required: true }
    },
    computed: {
      ...mapGetters({ user: get.CURRENT_USER }),
      payData() {
        return {
          user_id: this.user.id,
          products: this.products.map(({ id, quantity }) => ({ id, quantity }))
        }
      }
    },
    methods: {
      ...mapActions([action.POST_STRIPE]),
      pay(token) {
        console.log({ ...this.payData, token })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
  }

  .pay-content {
    display: flex;
    justify-content: space-between;

    width: 100%;
    margin-top: 20px;
  }

  .products-info {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding-right: 10px;
  }

  .product-row {
    display: flex;
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  .stripe-wrapper {
    width: 100%;
    padding-left: 10px;
  }

  .total-cost {
    margin-bottom: 20px;
  }
</style>
