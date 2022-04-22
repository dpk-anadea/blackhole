<template>
  <MainLayout>
    <template #main-content>
      <ProductsList />
    </template>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '@/components/layout/MainLayout'
  import ProductsList from '@/components/products-list/ProductsList'
</script>

<style scoped></style>
