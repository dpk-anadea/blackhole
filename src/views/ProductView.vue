<template>
  <MainLayout>
    <template #main-content>
      <ProductInformation />
    </template>
  </MainLayout>
</template>

<script setup>
  import MainLayout from '@/components/layout/MainLayout'
  import ProductInformation from '@/components/products-list/ProductInformation'
</script>
