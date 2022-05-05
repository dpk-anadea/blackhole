<template>
  <div v-if="isShow" class="flash-message-wrapper">
    <slot>
      <MessageProductAdded />
    </slot>
    <IconCross class="cross-icon" @click="closeMessage" />
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'

  import IconCross from '@/components/icons/IconCross'
  import MessageProductAdded from '@/components/products/MessageProductAdded'

  export default {
    name: 'BhFlashMessage',
    components: {
      IconCross,
      MessageProductAdded
    },
    computed: {
      ...mapGetters({ isShow: get.IS_SHOW_FLASH_MESSAGE })
    },
    watch: {
      isShow(newValue) {
        if (newValue) {
          setTimeout(this.closeMessage, 6000)
        }
      }
    },
    methods: {
      ...mapActions([action.TOGGLE_FLASH_MESSAGE]),
      closeMessage() {
        this[action.TOGGLE_FLASH_MESSAGE](false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .flash-message-wrapper {
    position: absolute;
    top: 100%;
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

    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
</style>
