<template>
  <StripeElements
    v-if="stripeLoaded"
    v-slot="{ elements }"
    ref="elms"
    :stripe-key="stripeKey"
    class="stripe-element">
    <StripeElement ref="card" :elements="elements" :options="cardOptions" />
  </StripeElements>
  <div class="pay-button-wrapper">
    <BhBaseButton type="button" @click="pay">Pay</BhBaseButton>
  </div>
</template>

<script>
  import { StripeElements, StripeElement } from 'vue-stripe-js'
  import { loadStripe } from '@stripe/stripe-js'
  import { defineComponent, ref, onBeforeMount } from 'vue'

  import BhBaseButton from '@/components/buttons/BhBaseButton'

  export default defineComponent({
    name: 'CardOnly',

    components: {
      BhBaseButton,
      StripeElements,
      StripeElement
    },

    emits: ['pay'],

    setup() {
      const stripeKey = ref(process.env.VUE_APP_STRIPE_PK)
      const cardOptions = ref({
        value: {
          postalCode: '12345'
        },
        style: {
          base: {
            iconColor: '#ffffff',
            color: '#ffffff',
            fontWeight: '500',
            fontSize: '16px',
            '::placeholder': {
              color: '#BBBBBB'
            }
          }
        }
      })
      const stripeLoaded = ref(false)
      const card = ref()
      const elms = ref()

      onBeforeMount(() => {
        const stripePromise = loadStripe(stripeKey.value)
        stripePromise.then(() => {
          stripeLoaded.value = true
        })
      })

      return {
        stripeKey,
        stripeLoaded,
        cardOptions,
        card,
        elms
      }
    },

    methods: {
      pay() {
        const cardElement = this.card.stripeElement

        this.elms.instance.createToken(cardElement).then((result) => {
          if (result.error) {
            console.log(result)
            return
          }
          this.$emit('pay', result.token)
        })
      }
    }
  })
</script>

<style lang="scss" scoped>
  .pay-button-wrapper {
    display: flex;
    justify-content: flex-end;

    width: 100%;
    margin-top: 15px;

    color: #ffd500;
  }
</style>
