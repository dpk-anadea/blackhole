<template>
  <div class="main-layout-wrapper">
    <MainHeader />

    <main class="main-content">
      <slot name="main-content"></slot>
    </main>

    <MainFooter />
  </div>
</template>

<script setup>
  import MainHeader from '@/components/navigation/MainHeader'
  import MainFooter from '@/components/navigation/MainFooter'
</script>

<style scoped>
  .main-content {
    display: flex;
    justify-content: center;

    min-height: 100vh;
    padding-top: var(--header-width);

    background-color: #000000;
  }
</style>
