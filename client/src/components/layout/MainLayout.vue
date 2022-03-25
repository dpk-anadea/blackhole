<template>
  <div class="main-layout-wrapper">
    <MainHeader />

    <main class="main-content">
      <slot name="main-content"></slot>
    </main>

    <MainFooter />
  </div>
</template>

<script>
  import MainHeader from '@/components/navigation/Header'
  import MainFooter from '@/components/navigation/Footer'

  export default {
    name: 'MainLayout',
    components: { MainFooter, MainHeader }
  }
</script>
