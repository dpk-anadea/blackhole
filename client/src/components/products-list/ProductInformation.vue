<template>
  <div class="product-wrapper">
    <div v-for="item in currentProduct" :key="item">
      <h3 class="title">{{ item.name }}</h3>
      <div class="price">{{ item.cost }}</div>

      <div class="product-block">
        <img class="img" src="../../images/productImg.png" alt="piano" />
        <div class="description">
          {{ item.description }} LOTUS perfectly replicates a famous guitar
          effect pedal that’s become very popular in Hip Hop and Lofi production
          (can you guess what it is?)
          <br />
          The problem is, this hardware pedal is hard to get, hard to use, and
          is extremely expensive.<br />
          Plus you can’t even save presets easily or even use it in stereo...
          However, LOTUS is very easy to use while keeping all the advanced
          features found in the hardware version, plus it’s much more
          affordable.<br />
          This plugin is a game changer for making melodies more interesting.
          Put it on any loop and it instantly gives you a unique sound The first
          4000 people to get <br />
          LOTUS get our other new plugin AURORA for free Scroll down to see
          overview videos and to hear before and after demos.
        </div>
      </div>
    </div>

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
  import { useRoute } from 'vue-router'
  import { action } from '@/store/constants'
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  const store = useStore()
  const route = useRoute()
  store.dispatch(action.GET_PRODUCTS)

  const getProducts = computed(() => store.state.products)

  const queryId = computed(() => route.query.id)

  const currentProduct = computed(() =>
    getProducts.value?.filter((el) => el.id === +queryId.value)
  )
</script>

<style scoped>
  .product-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;

    background-color: black;
  }

  .title {
    display: flex;
    justify-content: center;

    padding-top: 50px;
    margin-bottom: 10px;

    color: #ffffff;
    font-size: 30px;
    letter-spacing: 20px;
  }

  .price {
    display: flex;
    justify-content: center;

    padding-top: 30px;
    margin-bottom: 10px;

    color: #ffffff;
    font-size: 30px;
    letter-spacing: 20px;
  }

  .product-block {
    display: flex;

    margin: 35px;
  }

  .description {
    display: flex;
    justify-content: center;

    padding-top: 30px;
    margin: 0 0 10px 80px;

    color: #ffffff;
    font-size: 18px;
  }

  .img {
    width: 45%;
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
