<template>
  <MainLayout>
    <template #main-content>
      <MainContent />
    </template>
  </MainLayout>
</template>

<script>
  import MainLayout from '@/components/layout/MainLayout'
  import MainContent from '@/components/MainContent'

  export default {
    name: 'HelloWorld',
    components: {
      MainContent,
      MainLayout
    }
  }
</script>
