<template>
  <button v-bind="$attrs" class="base-button">
    <slot></slot>
  </button>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  .base-button {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 42px;
    padding: 0 20px;

    background-color: #7cd380;
    border: none;
    cursor: pointer;

    font-size: 20px;
    font-weight: 400;
    color: #ffffff;

    &:hover {
      background-color: #54d15a;
    }
  }
</style>
