<template>
  <form class="change-form-wrapper" @submit.prevent="submit">
    <BaseInput
      v-model="password"
      data-test="password"
      type="password"
      placeholder="Password" />

    <BaseInput
      v-model="confirmPassword"
      data-test="password"
      type="password"
      placeholder="Confirm password" />

    <BhBaseButton type="submit" class="button">CHANGE PASSWORD</BhBaseButton>
  </form>
</template>

<script setup>
  import { computed, ref } from 'vue'
  import { action } from '@/store/constants'
  import { useStore } from 'vuex'
  import { useRoute } from 'vue-router'

  import BaseInput from '@/components/BaseInput'
  import BhBaseButton from '@/components/buttons/BhBaseButton'

  const store = useStore()
  const route = useRoute()

  let password = ref('')
  let confirmPassword = ref('')

  const token = computed(() => route.params.resetLink)

  const submit = async () => {
    await store.dispatch(action.POST_RESET_PASSWORD, {
      resetLink: token.value,
      password: password.value
    })
  }
</script>

<style lang="scss" scoped>
  .change-form-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .button {
    border: none;
    border-radius: 10px;

    font-size: 15px;
    color: #fff;
    background: #767676;
  }
</style>
