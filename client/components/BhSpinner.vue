<template>
  <div class="spinner-wrapper">
    <div class="spinner" role="status"></div>
  </div>
</template>

<script>
  export default {
    name: 'BhSpinner'
  }
</script>

<style>
  .spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .spinner {
    display: inline-block;
    vertical-align: text-bottom;

    width: 3rem;
    height: 3rem;

    border: 0.25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;

    -webkit-animation: spinner-border 0.75s linear infinite;
    animation: spinner-border 0.75s linear infinite;

    color: var(--spinner-color);
  }

  @keyframes spinner-border {
    0% {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(1turn);
    }
  }
</style>
