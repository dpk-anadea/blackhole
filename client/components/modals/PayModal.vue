<template>
  <BaseModal modal-frame-style="width: 700px;" @close="$emit('close')">
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
    data: () => ({
      errors: []
    }),
    computed: {
      ...mapGetters({ user: get.CURRENT_USER }),
      payData() {
        const ids = this.products.map(({ id }) => id)
        const quantities = {}
        this.products.forEach(({ id, quantity }) => (quantities[id] = quantity))
        return {
          user_id: this.user.id,
          products: {
            ids,
            quantities
          }
        }
      }
    },
    methods: {
      ...mapActions([action.CLEAR_CART, action.POST_STRIPE]),
      async pay(token) {
        try {
          const order = await this[action.POST_STRIPE]({
            ...this.payData,
            token
          })

          if (order.status === 'succeeded') {
            this.$emit('change-modal')
          }
          await this[action.CLEAR_CART]()
        } catch (error) {
          this.errors.push(error)
        }
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
