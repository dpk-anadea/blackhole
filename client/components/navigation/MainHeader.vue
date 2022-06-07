<template>
  <header class="header-wrapper">
    <BhFlashMessage />

    <div class="nav-bar-logo">
      <img class="logo-img" src="../../images/logo.webp" alt="logo" />
    </div>

    <nav class="nav-bar">
      <div class="nav-items">
        <span class="nav-item"> Latest Product </span>
        <span class="nav-item"> Sample Packs </span>
        <span class="nav-item"> Plugins </span>
        <span class="nav-item"> Free Downloads </span>
        <router-link :to="{ name: 'Home' }" class="nav-item">
          Home Page
        </router-link>
        <router-link :to="{ name: 'Products' }" class="nav-item">
          Products
        </router-link>
        <router-link v-if="!isAuth" :to="{ name: 'Register' }" class="nav-item">
          Create account
        </router-link>
        <MyAccount data-test="my-account" v-if="isAuth" class="nav-item" />
        <router-link v-else :to="{ name: 'Login' }" class="nav-item">
          Login
        </router-link>
        <router-link :to="{ name: 'Cart' }" class="nav-item">
          <ShoppingCartIcon class="cart-icon" />
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
  import { computed } from 'vue'
  import { useStore } from 'vuex'

  import BhFlashMessage from '@/components/notification/BhFlashMessage'
  import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'
  import MyAccount from '@/components/navigation/MyAccount'

  const { state } = useStore()
  const isAuth = computed(() => state.isAuth)
</script>

<style lang="scss" scoped>
  .header-wrapper {
    position: absolute;
    top: 0;

    display: flex;

    width: 100%;
    height: var(--header-width);

    background-color: #1d1c1c;
  }

  .nav-bar {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    width: 100%;
    padding: 0 30px 0 0;
  }

  .nav-bar-logo {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-left: 30px;

    color: white;
  }

  .nav-items {
    display: flex;
    align-items: center;
  }

  .logo-img {
    max-width: 50%;
  }

  .nav-item {
    background-color: transparent;
    border: none;
    text-decoration: none;
    cursor: pointer;

    color: white;
    font-size: 14px;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  .cart-icon {
    width: 20px;
    height: 20px;
  }
</style>
