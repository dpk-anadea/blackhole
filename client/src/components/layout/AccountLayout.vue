<template>
  <div class="account-layout-wrapper">
    <router-link class="logo" :to="{ name: 'home' }">
      <img class="logo-img" src="../../images/logo.png" alt="logo" />
    </router-link>

    <div class="form-wrapper">
      <h1 class="title">{{ title }}</h1>
      <slot name="form"></slot>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from 'vue'

  defineProps({
    title: String
  })
</script>

<style scoped>
  .account-layout-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 100vh;

    background-color: #222;
  }

  .logo {
    display: flex;
    justify-content: center;

    margin: 80px 0 80px;
  }

  .logo-img {
    max-width: 60%;
  }

  .title {
    text-align: left;

    margin-top: 10px;
    margin-bottom: 40px;

    color: #fff;
    font-size: 24px;
    letter-spacing: 1px;
  }

  .form-wrapper {
    max-width: 100%;
  }
</style>
