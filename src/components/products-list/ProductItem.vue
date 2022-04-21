<template>
  <div class="product-wrapper">
    <img class="img" src="../../images/productImg.png" alt="piano" />
    <div class="product-info">
      <h5 class="product-title">{{ title }}</h5>
      <div class="product-description">{{ description }}</div>
      <div v-if="price" class="price">{{ price }}</div>
      <a href="#" download="" v-else class="product-button">Free Download</a>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    title: String,
    description: String,
    price: {
      type: String,
      default: null
    }
  })
</script>

<style lang="scss" scoped>
  .product-wrapper {
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 22%;
    height: 450px;
    max-height: 600px;
    padding: 20px;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    max-width: 100%;
  }

  .product-title {
    text-align: center;

    margin-top: 30px;

    color: white;
    font-size: 22px;
  }

  .product-description {
    text-align: center;

    color: white;
    font-size: 18px;
  }

  .product-button {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    text-decoration: none;

    width: 250px;
    height: 50px;
    margin-top: 25px;

    border: none;

    color: white;
    background-color: #7cd380;
    font-size: 20px;
  }

  .img {
    width: 200px;
  }

  .price {
    opacity: 0.7;

    margin: 30px 0;

    font-size: 22px;
    color: #ffffff;
  }
</style>
