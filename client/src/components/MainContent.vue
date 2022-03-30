<template>
  <section class="plugins-selection-wrapper">
    <article class="free-download-wrapper">
      <h1 class="free-download-title">
        1.1GB OF FREE SAMPLES (Limited Time Only)
      </h1>
      <div class="free-download-sub-title">
        Exclusive Samples Designed By 3x Grammy Winning Producer S1 for
        <del class="cross-out-figure">$75</del> FREE
      </div>
      <button class="free-download-button">Free Download</button>
    </article>

    <h2 class="plugins-selection-title">
      Download our free plugins to level up your music production
    </h2>
    <div class="products-list">
      <ProductItem v-for="item in 3" :key="item" />
    </div>

    <div class="wrapper-packs">Download our most popular free sample packs</div>
  </section>
</template>

<script setup>
  import ProductItem from '@/components/products-list/ProductItem'
</script>

<style lang="scss" scoped>
  .free-download-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 320px;
    padding: 40px 20px;

    background-color: black;
  }

  .free-download-title {
    margin: 0 0 20px;

    background: linear-gradient(to bottom right, #f05a28 20%, #ec008c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 50px;
  }

  .free-download-sub-title {
    margin-bottom: 30px;

    color: white;
    font-size: 27px;
  }

  .cross-out-figure {
    color: #ffffff;
    opacity: 0.7;
  }

  .free-download-button {
    text-align: center;
    cursor: pointer;

    border: none;

    width: 360px;
    height: 60px;

    color: white;
    background: linear-gradient(to bottom right, #f05a28 20%, #ec008c 100%);
    font-size: 27px;

    &:hover {
      background: linear-gradient(to bottom right, #ec008c 20%, #f05a28 100%);
    }
  }

  .plugins-selection-wrapper {
    display: flex;
    flex-direction: column;

    background-color: #1d1c1c;
  }

  .plugins-selection-title {
    text-align: center;

    margin: 40px 0 60px;

    color: white;
    font-size: 38px;
  }

  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding: 0 0 50px;
    gap: 35px;
    width: 100%;
  }

  .wrapper-packs {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 30px;

    color: white;
    background-color: black;
    font-size: 30px;
  }
</style>
