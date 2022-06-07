<template>
  <div v-if="!resetSuccess">
    <form @submit.prevent="submit" class="register-form-wrapper">
      <span class="reset-message">{{ errorResetMessage }}</span>

      <BaseInput v-model="email" data-test="email" placeholder="Email" />

      <div class="login-buttons">
        <BhBaseButton type="submit" class="button">Send</BhBaseButton>
      </div>
    </form>

    <div class="hint-text">
      *Don't have an account?
      <router-link :to="{ name: 'Register' }" class="active-link">
        Click here to create one.
      </router-link>
    </div>
  </div>

  <div v-else class="reset-password-success">
    We have sent you the email on
    <span class="email">{{ email }}</span> to reset your password.
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { useStore } from 'vuex'
  import { action } from '@/store/constants'

  import BaseInput from '@/components/BaseInput'
  import BhBaseButton from '@/components/buttons/BhBaseButton'

  const store = useStore()

  let email = ref('')
  let resetSuccess = ref(false)
  let errorResetMessage = ref('')

  const submit = async () => {
    const resetPassword = await store.dispatch(action.POST_REQUEST_PASSWORD, {
      email: email.value
    })

    if (resetPassword.message) {
      errorResetMessage.value = 'The user with this email was not found!'
    } else {
      resetSuccess.value = !resetSuccess.value
    }
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

  .reset-password-success {
    min-height: 100vh;
  }
</style>
