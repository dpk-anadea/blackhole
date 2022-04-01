<script setup>
  import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'
</script>

<template>
  <header class="header-wrapper">
    <div class="nav-bar-logo">
      <img class="logo-img" src="../../images/logo.png" alt="logo" />
    </div>

    <nav class="nav-bar">
      <div class="nav-items">
        <router-link :to="{ name: 'register' }" class="nav-item">
          Create account
        </router-link>
        <router-link :to="{ name: 'login' }" class="nav-item">
          Login
        </router-link>
        <ShoppingCartIcon />
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .header-wrapper {
    display: flex;

    width: 100%;
    height: 72px;

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

  .shopping-cart-icon {
    width: 20px;
  }
</style>
