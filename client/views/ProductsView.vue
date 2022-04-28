<template>
  <MainLayout>
    <template #main-content>
      <ProductsList />
    </template>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '@/components/layout/MainLayout'
  import ProductsList from '@/components/products/ProductsList'
</script>

<style scoped></style>
