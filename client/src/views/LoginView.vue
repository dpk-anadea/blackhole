<template>
  <AccountLayout title="Sing In">
    <template #form>
      <LoginForm />
    </template>
  </AccountLayout>
</template>

<script setup>
  import AccountLayout from '@/components/layout/AccountLayout'
  import LoginForm from '@/components/forms/LoginForm'
</script>

<style scoped></style>
