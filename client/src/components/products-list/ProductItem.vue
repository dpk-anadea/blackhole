<template>
  <div class="product-wrapper">
    <img src="../../images/productImg.png" alt="piano" />
    <div class="product-info">
      <h5 class="product-title">{{ title }}</h5>
      <div class="product-description">{{ description }}</div>
      <button class="product-button">Free Download</button>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    title: String,
    description: String
  })
</script>

<style lang="scss" scoped>
  .product-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 26%;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    cursor: pointer;
    text-align: center;

    width: 250px;
    height: 50px;
    margin-top: 25px;

    border: none;

    color: white;
    background-color: #7cd380;
    font-size: 20px;
  }
</style>
