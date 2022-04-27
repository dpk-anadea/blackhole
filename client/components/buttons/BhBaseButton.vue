<template>
  <button v-bind="$attrs" class="base-button">
    <slot></slot>
  </button>
</template>

<script>
  export default {}
</script>

<style>
  .base-button {
    height: 42px;
    padding: 0 20px;

    border: none;
    background-color: transparent;

    font-size: 20px;
    font-weight: 400;
  }
</style>
