<script setup>
  import { reactive } from 'vue'

  const state = reactive({
    email: '',
    password: ''
  })
</script>

<template>
  <form class="register-form-wrapper" @submit.prevent="submit">
    <input v-model="state.email" class="input" id="email" placeholder="Email" />
    <input
      v-model="state.password"
      class="input"
      type="password"
      id="password"
      placeholder="Password" />
    <button type="submit" class="button">LOGIN</button>
  </form>

  <div class="hint">
    <div class="hint-text">
      *If you already placed an order and did not activate your account please
      click activate account below.
    </div>
    <a class="active-link">Activate Account</a>
    <div class="hint-text">
      *Don't have an account?
      <router-link :to="{ name: 'register' }" class="active-link">
        Click here to create one.
      </router-link>
    </div>
  </div>
</template>

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
    margin-top: 50px;
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
</style>
