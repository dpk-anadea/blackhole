<template>
  <router-link :to="{ name: 'Cart' }" class="message-link">
    <ShoppingCartIcon class="cart-icon" />
    <span class="message-text">
      Product added to cart. View cart and check out.
    </span>
  </router-link>
</template>

<script setup>
  import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'
</script>

<style lang="scss" scoped>
  .message-link {
    display: flex;
    align-items: center;

    text-decoration: none;

    &:hover {
      opacity: 0.7;
    }
  }

  .message-text {
    font-weight: 700;
    color: #ffffff;
  }

  .cart-icon {
    width: 20px;
    height: 20px;
    margin-right: 8px;
  }
</style>
