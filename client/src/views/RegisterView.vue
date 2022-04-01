<template>
  <AccountLayout title="Create Account">
    <template #form>
      <RegisterForm @submit="onSubmit" />
    </template>
  </AccountLayout>
</template>

<script setup>
  import { useStore } from 'vuex'

  import AccountLayout from '@/components/layout/AccountLayout'
  import RegisterForm from '@/components/forms/RegisterForm'

  const store = useStore()

  const createUserAction = 'CREATE_USER'

  const onSubmit = (formData) => {
    const { firstName, lastName, phoneNumber, email, password } = formData
    const registerFormData = {
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber,
      email: email,
      password: password
    }

    store.dispatch(createUserAction, registerFormData)
  }
</script>

<style scoped></style>
