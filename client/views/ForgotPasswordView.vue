<template>
  <AccountLayout title="Forgot Password">
    <template #form>
      <ForgotPasswordForm />
    </template>
  </AccountLayout>
</template>

<script setup>
  import AccountLayout from '@/components/layout/AccountLayout'
  import ForgotPasswordForm from '@/components/forms/ForgotPasswordForm'
</script>
