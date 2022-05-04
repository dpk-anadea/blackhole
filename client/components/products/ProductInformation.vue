<template>
  <div class="product-wrapper">
    <section class="product-section">
      <img class="img" src="../../images/productImg.png" alt="piano" />

      <div class="product-info">
        <h3 class="title">{{ currentProduct.name }}</h3>
        <button class="add-to-card-btn" @click="addToCart">
          Add to cart - ${{ currentProduct.cost }}
        </button>
        <div class="description">{{ currentProduct.description }}</div>
      </div>
    </section>

    <iframe
      width="73%"
      height="485"
      src="https://www.youtube.com/embed/q4TLsakCF5I"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>

    <div class="lotus">
      <div class="lotus-desc">
        <h3>What's under the hood of Lotus?</h3>
        <p>
          We meticulously recreated the famous MN3005 BBD chip (Bucket Brigade
          Delay) found in classic guitar pedals from the 70s. This chip
          completely revolutionized the sound of delays forever!
        </p>
        <p>So what makes LOTUS special?</p>

        <p>
          Rather than use a simple digital delay as found in other plugins, the
          BBD in Lotus functions exactly as it does in coveted analog gear.
        </p>
        <p>
          But the real magic of Lotus is that it stacks FOUR of these BBD chips
          and combines them with a powerful pitch-shifting sequencer.
        </p>
        <p>
          This allows you to manipulate your audio in completely different ways
          than any other delay plugin on the market.
        </p>
      </div>
      <img class="img-lotus" src="../../images/lotus.webp" alt="piano" />
    </div>
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'
  import { action } from '@/store/constants'

  const store = useStore()
  const route = useRoute()
  store.dispatch(action.GET_PRODUCTS)

  const getProducts = computed(() => store.state.products)

  const queryId = computed(() => route.query.id)

  const currentProduct = computed(() =>
    getProducts.value?.find((el) => el.id === +queryId.value)
  )

  const addToCart = () => {
    store.dispatch(action.ADD_PRODUCT_TO_CART, currentProduct.value)
  }
</script>

<style scoped>
  .product-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 80px;

    background-color: black;
  }

  .product-section {
    display: flex;
    align-items: center;

    margin-bottom: 60px;
  }

  .img {
    width: 45%;
  }

  .product-info {
    display: flex;
    flex-direction: column;

    margin-left: 70px;
  }

  .title {
    margin-bottom: 20px;

    font-size: 32px;
    font-weight: 400;
    color: #ffffff;
  }

  .add-to-card-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 55%;
    height: 54px;

    background-color: #7cd380;
    border: none;

    font-size: 20px;
    font-weight: 600;
    color: #ffffff;
  }

  .description {
    display: flex;
    justify-content: center;

    margin-top: 30px;

    opacity: 0.7;

    font-size: 18px;
    color: #ffffff;
  }

  .lotus {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 50px 35px;
  }

  .lotus-desc {
    margin: 0 80px 10px 0;

    color: #ffffff;
    font-size: 18px;
  }

  .img-lotus {
    width: 28%;
    height: fit-content;
  }
</style>
