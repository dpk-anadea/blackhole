<template>
  <input
    v-bind="$attrs"
    :value="modelValue"
    class="input"
    @input="handleInput" />
</template>

<script>
  export default {
    name: 'BaseInput',
    props: { modelValue: String },
    methods: {
      handleInput(e) {
        this.$emit('update:modelValue', e.target.value)
      }
    }
  }
</script>

<style scoped>
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
</style>
