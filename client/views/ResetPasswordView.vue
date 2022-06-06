<template>
  <AccountLayout title="Forgot Password">
    <template #form>
      <ResetPasswordForm />
    </template>
  </AccountLayout>
</template>

<script setup>
  import AccountLayout from '@/components/layout/AccountLayout'
  import ResetPasswordForm from '@/components/forms/ResetPasswordForm'
</script>

<style scoped></style>
