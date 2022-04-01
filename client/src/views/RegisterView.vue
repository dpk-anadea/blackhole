<script setup>
  import { useStore } from 'vuex'

  import AccountLayout from '@/components/layout/AccountLayout'
  import RegisterForm from '@/components/forms/RegisterForm'

  const store = useStore()

  const onSubmit = (formData) => {
    const { firstName, lastName, phoneNumber, email, password } = formData
    const registerFormData = {
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber,
      email: email,
      password: password
    }

    store.dispatch('CREATE_USER', registerFormData)
  }
</script>

<template>
  <AccountLayout title="Create Account">
    <template #form>
      <RegisterForm @submit="onSubmit" />
    </template>
  </AccountLayout>
</template>

<style scoped></style>
