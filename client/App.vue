<template>
  <router-view></router-view>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { action } from '@/store/constants'

  const store = useStore()

  store.dispatch(action.GET_PRODUCTS_FROM_STORAGE)
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  :root {
    --header-width: 62px;

    --primary-text-color: #ffffff;

    --primary-button-color: #7cd380;
    --primary-button-hover-color: #54d15a;

    --link-color: var(--primary-button-color);
    --link-hover-color: var(--primary-button-hover-color);

    --spinner-color: var(--primary-button-color);
  }

  * {
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    color: var(--primary-text-color);
  }

  .overflow-hidden {
    overflow: hidden;
  }
</style>
