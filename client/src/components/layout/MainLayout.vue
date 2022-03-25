<template>
  <div class="main-layout-wrapper">
    <HeaderSection />

    <main class="main-content">
      <slot name="main-content"></slot>
    </main>

    <FooterSection />
  </div>
</template>

<script>
  import HeaderSection from '@/components/navigation/Header'
  import FooterSection from '@/components/navigation/Footer'

  export default {
    name: 'MainLayout',
    components: { FooterSection, HeaderSection }
  }
</script>
