<script setup>
  import AccountLayout from '@/components/layout/AccountLayout'
  import LoginForm from '@/components/forms/LoginForm'
</script>

<template>
  <AccountLayout title="Sing In">
    <template #form>
      <LoginForm />
    </template>
  </AccountLayout>
</template>
