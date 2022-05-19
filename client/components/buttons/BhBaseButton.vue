<template>
  <button v-bind="$attrs" :disabled="disabled || isLoading" class="base-button">
    <BhSpinner v-if="isLoading" class="base-button__spinner" />
    <div :class="isLoading && 'opacity'">
      <slot></slot>
    </div>
  </button>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { get } from '@/store/constants'

  import BhSpinner from '@/components/BhSpinner'

  export default {
    name: 'BhBaseButton',
    components: { BhSpinner },
    props: {
      disabled: { type: Boolean, default: false }
    },
    computed: {
      ...mapGetters({ isLoading: get.LOADING })
    }
  }
</script>

<style lang="scss">
  .base-button {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 42px;
    padding: 0 20px;

    background-color: var(--primary-button-color);
    border: none;
    cursor: pointer;

    font-size: 20px;
    font-weight: 400;
    color: #ffffff;

    &:hover {
      background-color: var(--primary-button-hover-color);
    }

    &__spinner {
      position: absolute;
      z-index: 3;

      display: flex;
      justify-content: center;
      align-items: center;

      pointer-events: none;
    }

    &:disabled {
      cursor: not-allowed;

      &:hover {
        background-color: var(--primary-button-color);
      }
    }
  }

  .opacity {
    opacity: 0;
  }
</style>

<style lang="scss">
  .spinner {
    width: 30px;
    height: 30px;

    color: #000000;
  }
</style>
