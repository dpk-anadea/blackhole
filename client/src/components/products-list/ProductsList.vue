<template>
  <div class="wrapper-type-products">
    <div class="name-product-types">
      <button
        @click="openAllProducts"
        :class="['type-button', typeName === 'All Products' && 'active-type']"
        class="type-button">
        All Products
      </button>
      <button
        @click="openProductType"
        :class="['type-button', typeName === item && 'active-type']"
        v-for="item in uniqueProductsTypes"
        :key="item">
        {{ item }}
      </button>
    </div>

    <div class="products-list" v-if="typeName === 'All Products' || !typeName">
      <ProductItem
        class="products"
        v-for="product in getProducts"
        :key="product"
        :title="product.name"
        :description="product.description"
        :price="product.cost"
        @click="navigateToProduct(product.id)" />
    </div>

    <div class="products-list" v-if="typeName === 'MIDI'">
      <ProductItem
        class="products"
        v-for="product in productsByType"
        :key="product"
        :title="product.name"
        :description="product.description"
        :price="product.cost"
        @click="navigateToProduct(product.id)" />
    </div>

    <div class="products-list" v-if="typeName === 'One-Shots'">
      <ProductItem
        class="products"
        v-for="product in productsByType"
        :key="product"
        :title="product.name"
        :description="product.description"
        :price="product.cost"
        @click="navigateToProduct(product.id)" />
    </div>

    <div class="products-list" v-if="typeName === 'Plugins'">
      <ProductItem
        class="products"
        v-for="product in productsByType"
        :key="product"
        :title="product.name"
        :description="product.description"
        :price="product.cost"
        @click="navigateToProduct(product.id)" />
    </div>

    <div class="products-list" v-if="typeName === 'Bundles'">
      <ProductItem
        class="products"
        v-for="product in productsByType"
        :key="product"
        :title="product.name"
        :description="product.description"
        :price="product.cost"
        @click="navigateToProduct(product.id)" />
    </div>

    <div class="products-list" v-if="typeName === 'Drum Kits'">
      <ProductItem
        class="products"
        v-for="product in productsByType"
        :key="product"
        :title="product.name"
        :description="product.description"
        :price="product.cost"
        @click="navigateToProduct(product.id)" />
    </div>

    <div class="products-list" v-if="typeName === 'Melodies'">
      <ProductItem
        class="products"
        v-for="product in productsByType"
        :key="product"
        :title="product.name"
        :description="product.description"
        :price="product.cost"
        @click="navigateToProduct(product.id)" />
    </div>

    <div class="products-list" v-if="typeName === 'Serum'">
      <ProductItem
        class="products"
        v-for="product in productsByType"
        :key="product"
        :title="product.name"
        :description="product.description"
        :price="product.cost"
        @click="navigateToProduct(product.id)" />
    </div>
  </div>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { action } from '@/store/constants'
  import { computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import ProductItem from '@/components/products-list/ProductItem'

  const store = useStore()
  const router = useRouter()
  const typeName = ref('All Products')
  store.dispatch(action.GET_PRODUCTS)

  const getProducts = computed(() => store.state.products)

  const productsType = computed(() => getProducts.value?.map((el) => el.type))

  const uniqueProductsTypes = computed(() =>
    productsType.value?.filter(
      (el, inx) => productsType.value?.indexOf(el) === inx
    )
  )

  const productsByType = computed(() =>
    getProducts.value?.filter((el) => el.type === typeName.value)
  )

  function openProductType(e) {
    typeName.value =
      typeName.value === e.target.innerText ? null : e.target.innerText
  }

  function openAllProducts(e) {
    typeName.value =
      typeName.value === e.target.innerText ? null : e.target.innerText
  }

  function navigateToProduct(id) {
    router.push({ name: 'product', query: { id } })
  }
</script>

<style lang="scss" scoped>
  .wrapper-type-products {
    display: flex;
    flex-direction: column;

    padding: 50px 0;
    width: 100vw;

    background-color: black;
  }

  .name-product-types {
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 50px;
  }

  .products {
    transition: 4s;
    cursor: pointer;

    border-radius: 5px;

    box-shadow: 0 3px 7px #0003;
    background-color: #111111;

    &:hover {
      background-color: #767676;
    }
  }

  .products-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    padding: 0 0 50px;
    gap: 35px;
    width: 100%;
  }

  .type-button {
    opacity: 0.7;
    cursor: pointer;

    padding: 5px 15px;

    border-radius: 20px;
    border: none;

    background-color: transparent;
    color: white;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;

    &:hover {
      background-color: #1d1c1c;
    }

    &:not(:last-child) {
      margin-right: 8px;
    }
  }

  .test {
    color: white;
  }

  .active-type {
    background-color: #222222;
  }
</style>
