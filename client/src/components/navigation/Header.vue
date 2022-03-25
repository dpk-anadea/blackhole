<template>
  <header class="header-wrapper">
    <div class="nav-bar-logo">LOGO</div>

    <nav class="nav-bar">
      <ul class="nav-items">
        <li
          v-for="(item, index) of $options.static.navBarItems"
          :key="'navItem' + index"
          class="nav-item">
          {{ item.name }}
        </li>
        <li class="shopping-cart-icon nav-item"><ShoppingCartIcon /></li>
      </ul>
    </nav>
  </header>
</template>

<script>
  import ShoppingCartIcon from '@/components/icons/ShoppingCartIcon'

  export default {
    name: 'HeaderSection',
    components: {
      ShoppingCartIcon
    },
    static: {
      navBarItems: [
        { name: 'Latest Product' },
        { name: 'Sample Packs' },
        { name: 'Plugins' },
        { name: 'Login' },
        { name: 'Create account' },
        { name: 'Home Page' }
      ]
    }
  }
</script>

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

  .nav-item {
    list-style-type: none;
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
