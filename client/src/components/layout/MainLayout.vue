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
  import MainHeader from '@/components/navigation/MainHeader'
  import MainFooter from '@/components/navigation/MainFooter'

  export default {
    name: 'MainLayout',
    components: { MainFooter, MainHeader }
  }
</script>
