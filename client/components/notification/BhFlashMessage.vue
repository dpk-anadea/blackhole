<template>
  <div v-if="isShowMessage" class="flash-message-wrapper">
    <slot></slot>
    <IconCross class="cross-icon" />
  </div>
</template>

<script>
  import IconCross from '@/components/icons/IconCross'

  export default {
    name: 'BhFlashMessage',
    components: {
      IconCross
    },
    computed: {
      isShowMessage() {
        return true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flash-message-wrapper {
    position: absolute;
    top: var(--header-width);
    z-index: 4;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 44px;
    padding: 0 100px;

    background-color: #5086ff;

    transition: top 0.25s, visibility 0.25s, opacity 0.15s;
    transition-timing-function: cubic-bezier(0.33, 0.59, 0.14, 1);
  }

  .cross-icon {
    position: absolute;
    right: 80px;
  }
</style>
