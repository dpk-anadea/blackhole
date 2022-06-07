<template>
  <AccountLayout title="Create Account">
    <template #form>
      <RegisterForm @submit="onSubmit" />
    </template>
  </AccountLayout>
</template>

<script setup>
  import { useStore } from 'vuex'
  import { action } from '@/store/constants'
  import { useRouter } from 'vue-router'

  import AccountLayout from '@/components/layout/AccountLayout'
  import RegisterForm from '@/components/forms/RegisterForm'

  const store = useStore()
  const router = useRouter()

  const onSubmit = async (formData) => {
    const { firstName, lastName, phoneNumber, email, password } = formData
    const registerFormData = {
      first_name: firstName,
      last_name: lastName,
      phone: phoneNumber,
      email: email,
      password: password
    }

    try {
      await store.dispatch(action.CREATE_USER, registerFormData)
      router.push({ name: 'Home' })
    } catch (error) {
      console.log(error)
    }
  }
</script>

<style scoped></style>
