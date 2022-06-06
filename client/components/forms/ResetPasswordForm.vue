<template>
  <form
    v-if="!resetSuccess"
    @submit.prevent="submit"
    class="register-form-wrapper">
    <span class="reset-message">{{ errorResetMessage }}</span>
    <input
      v-model="state.email"
      class="input"
      data-test="email"
      placeholder="Email" />

    <div class="login-buttons">
      <button type="submit" class="button">Send</button>
    </div>
  </form>

  <div v-if="!resetSuccess" class="hint">
    <div class="hint-text">
      *Don't have an account?
      <router-link :to="{ name: 'register' }" class="active-link">
        Click here to create one.
      </router-link>
    </div>
  </div>

  <div class="reset-password-success" v-else>
    We have sent you the email on
    <span class="email">{{ state.email }}</span> to reset your password.
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue'
  import { useStore } from 'vuex'
  import { action } from '@/store/constants'

  const store = useStore()

  const state = reactive({
    email: '',
    password: ''
  })

  let resetSuccess = ref(false)
  let errorResetMessage = ref('')

  const submit = async () => {
    const resetPassword = await store.dispatch(action.RESET_PASSWORD, {
      email: state.email
    })

    if (resetPassword.message) {
      errorResetMessage.value = 'This email was not registered'
    } else {
      resetSuccess.value = true
    }
  }
</script>

<style lang="scss" scoped>
  .register-form-wrapper {
    display: flex;
    flex-direction: column;
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

  .hint {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 320px;
    max-width: 100%;
    margin: 50px 0;
  }

  .reset-message {
    font-size: 20px;
    color: #fa1807;
  }

  .hint-text {
    text-align: center;

    color: #c1c1c1;
    font-size: 18px;

    &:nth-last-child(1) {
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

  .email {
    color: #007bff;
  }

  .login-buttons {
    display: flex;
    justify-content: space-between;
  }

  .reset-password-success {
    min-height: 100vh;
  }
</style>
