<template>
  <form class="change-form-wrapper" @submit.prevent="submit">
    <input
      v-model="password"
      class="input"
      type="password"
      data-test="password"
      placeholder="Password" />
    <input
      v-model="confirmPassword"
      class="input"
      type="password"
      data-test="confirm-password"
      placeholder="Confirm password" />
    <button type="submit" class="button">CHANGE PASSWORD</button>
  </form>
</template>

<script setup>
  import { computed, reactive } from 'vue'
  import { action } from '@/store/constants'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'

  const store = useStore()
  const route = useRoute()

  const { password, confirmPassword } = reactive({
    password: '',
    confirmPassword: ''
  })

  const token = computed(() => route.params.resetLink)

  const submit = async () => {
    await store.dispatch(action.POST_RESET_PASSWORD, {
      resetLink: token.value,
      password: password
    })
  }
</script>

<style lang="scss" scoped>
  .change-form-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .input {
    outline: none;

    width: 320px;
    max-width: 100%;
    height: 38px;
    margin: 0 0 40px;

    border: 0;
    border-bottom: 1px solid #ffffff;

    background-color: transparent;
    color: white;
    font-size: 18px;

    &::placeholder {
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      font-family: 'Montserrat', sans-serif;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  input:focus {
    background-color: transparent;
  }

  .button {
    cursor: pointer;
    outline: none;

    padding: 10px 15px;

    border: none;
    border-radius: 10px;

    letter-spacing: 1px;
    font-size: 15px;
    color: #fff;
    background: #767676;
  }
</style>
