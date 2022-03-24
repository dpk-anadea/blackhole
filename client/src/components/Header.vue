<template>
  <header class="header-wrapper">
    <nav class="nav-bar">
      <div class="nav-bar-logo">
        LOGO
      </div>

      <ul class="nav-items">
        <li v-for="(item, index) of navBarItems"
            :key="'navItem' + index"
            class="nav-item">
          {{ item.name }}
        </li>
        <li class="shopping-cart-icon nav-item"><ShoppingCartIcon/></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import ShoppingCartIcon from "@/components/ShoppingCartIcon";

export default {
  name: 'HeaderSection',
  components: {
    ShoppingCartIcon
  },
  computed: {
    navBarItems() {
      return [
        { name: 'Latest Product' },
        { name: 'Sample Packs' },
        { name: 'Plugins' },
        { name: 'Free Downloads' },
        { name: 'My Account' },
        { name: 'Home Page' }
      ]
    }
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
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 0 30px;
}

.nav-bar-logo {
  color: white;
}

.nav-items {
  display: flex;
  align-items: center;
}

.nav-item {
  list-style-type: none;

  color: white;
  font-size: 18px;

  &:not(:last-child) {
    margin-right: 20px;
  }
}

.shopping-cart-icon {
  width: 20px;
}

</style>