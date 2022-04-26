<template>
  <AccountLayout title="Sing In">
    <template #form>
      <LoginForm />
    </template>
  </AccountLayout>
</template>

<script setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'

  import AccountLayout from '@/components/layout/AccountLayout'
  import LoginForm from '@/components/forms/LoginForm'

  const { state } = useStore()
  const router = useRouter()

  const isAuth = computed(() => state.isAuth)
  if (isAuth.value) {
    router.push({ name: 'home' })
  }
</script>
