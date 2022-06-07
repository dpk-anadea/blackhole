<template>
  <form class="register-form-wrapper" @submit.prevent="submit">
    <BaseInput
      v-model="state.firstName"
      data-test="first-name"
      placeholder="First Name" />

    <BaseInput
      v-model="state.lastName"
      data-test="last-name"
      placeholder="Last Name" />

    <BaseInput
      v-model="state.phoneNumber"
      data-test="phone"
      placeholder="Phone" />

    <BaseInput v-model="state.email" data-test="email" placeholder="Email" />

    <BaseInput
      v-model="state.password"
      type="password"
      data-test="password"
      placeholder="Password" />

    <BaseInput
      v-model="state.confirmPassword"
      type="password"
      data-test="confirm-password"
      placeholder="Confirm password" />

    <BhBaseButton type="submit" class="button">CREATE ACCOUNT</BhBaseButton>
  </form>

  <div class="hint">
    <div class="hint-text">
      Already have an account?
      <router-link :to="{ name: 'Login' }" class="active-link">
        Click here to login.
      </router-link>
    </div>
    <div class="hint-text">
      *If you already placed an order and did not activate your account please
      click activate account below.
    </div>
  </div>
</template>

<script setup>
  import { reactive, defineEmits } from 'vue'

  import BaseInput from '@/components/BaseInput'
  import BhBaseButton from '@/components/buttons/BhBaseButton'

  const emit = defineEmits(['submit'])

  const state = reactive({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const submit = () => {
    emit('submit', state)
  }
</script>

<style lang="scss" scoped>
  .register-form-wrapper {
    display: flex;
    flex-direction: column;
  }

  .button {
    border: none;
    border-radius: 10px;

    font-size: 15px;
    color: #fff;
    background: #767676;
  }

  .hint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 320px;
    max-width: 100%;
    margin: 50px 0;
  }

  .hint-text {
    text-align: center;

    color: #c1c1c1;
    font-size: 18px;

    &:nth-last-child(2) {
      margin-top: 30px;
    }
  }

  .active-link {
    text-decoration: none;
    cursor: pointer;

    color: #007bff;

    &:last-child {
      margin-bottom: 30px;
    }
  }
</style>
