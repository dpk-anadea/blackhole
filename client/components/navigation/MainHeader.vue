<template>
  <header class="header-wrapper">
    <BhFlashMessage />

    <div class="nav-bar-logo">
      <img class="logo-img" src="../../images/logo.png" alt="logo" />
    </div>

    <nav class="nav-bar">
      <div class="nav-items">
        <router-link :to="{ name: 'home' }" class="nav-item">
          Home
        </router-link>
        <router-link :to="{ name: 'products' }" class="nav-item">
          Products
        </router-link>
        <router-link v-if="!isAuth" :to="{ name: 'register' }" class="nav-item">
          Create account
        </router-link>
        <button v-if="isAuth" @click="logout" class="nav-item">Logout</button>
        <router-link v-else :to="{ name: 'login' }" class="nav-item">
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
  import { action } from '@/store/constants'

  import BhFlashMessage from '@/components/notification/BhFlashMessage'
  import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'

  const { state, dispatch } = useStore()
  const isAuth = computed(() => state.isAuth)

  const logout = () => {
    dispatch(action.LOGOUT)
  }
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
    font-size: 18px;

    &:not(:last-child) {
      margin-right: 20px;
    }

    &:hover {
      color: #282828;
    }
  }

  .cart-icon {
    width: 20px;
    height: 20px;
  }
</style>
