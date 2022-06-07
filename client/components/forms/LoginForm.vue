<template>
  <form class="register-form-wrapper" @submit.prevent="submit">
    <BaseInput v-model="email" data-test="email" placeholder="Email" />

    <BaseInput
      v-model="password"
      type="password"
      data-test="password"
      placeholder="Password" />

    <div class="login-buttons">
      <BhBaseButton @click="goToResetPassword" class="button">
        FORGOT PASSWORD
      </BhBaseButton>
      <BhBaseButton type="submit" class="button">LOGIN</BhBaseButton>
    </div>
  </form>

  <div class="hint">
    <div class="hint-text">
      *If you already placed an order and did not activate your account please
      click activate account below.
    </div>
    <div class="hint-text">
      *Don't have an account?
      <router-link :to="{ name: 'Register' }" class="active-link">
        Click here to create one.
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'
  import { useStore } from 'vuex'
  import { action } from '@/store/constants'
  import { useRouter } from 'vue-router'

  import BaseInput from '@/components/BaseInput'
  import BhBaseButton from '@/components/buttons/BhBaseButton'

  const store = useStore()
  const router = useRouter()

  let email = ref('')
  let password = ref('')

  watch(email, () => {
    console.log(email)
  })

  const submit = async () => {
    await store.dispatch(action.LOGIN, {
      email: email.value,
      password: password.value
    })
  }

  const goToResetPassword = () => {
    router.push({ name: 'ResetPassword' })
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

  .login-buttons {
    display: flex;
    justify-content: space-between;
  }
</style>
