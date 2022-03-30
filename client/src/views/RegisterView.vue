<template>
  <AccountLayout title="Create Account">
    <template #form>
      <RegisterForm />
    </template>
  </AccountLayout>
</template>

<script setup>
  import AccountLayout from '@/components/layout/AccountLayout'
  import RegisterForm from '@/components/forms/RegisterForm'
</script>

<style scoped></style>
