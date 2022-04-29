<template>
  <div class="count-wrapper">
    <button class="count-control" @click="decrease">
      <MinusIcon class="icon" />
    </button>
    <input
      v-model="countProxy"
      type="text"
      class="count-control"
      @blur="checkInputValue" />
    <button class="count-control" @click="increase">
      <PlusIcon class="icon" />
    </button>
  </div>
</template>

<script>
  import MinusIcon from '@/components/icons/MinusIcon'
  import PlusIcon from '@/components/icons/PlusIcon'

  export default {
    name: 'BhCountControl',
    components: {
      MinusIcon,
      PlusIcon
    },
    props: {
      count: { type: Number, required: true }
    },
    data: () => ({
      newCount: 1,
      inputCount: null
    }),
    computed: {
      countProxy: {
        get() {
          if (this.inputCount === '') return ''
          return this.inputCount || this.count
        },
        set(val) {
          this.inputCount = val
        }
      }
    },
    methods: {
      checkInputValue() {
        if (this.inputCount >= 1) {
          this.updateCountValue(+this.inputCount)
        }
        if (this.inputCount === '0') {
          this.removeProduct()
        }
        this.inputCount = null
      },
      decrease() {
        if (this.countProxy > 1) {
          this.updateCountValue(this.countProxy - 1)
        } else {
          this.removeProduct()
        }
      },
      increase() {
        this.updateCountValue(this.countProxy + 1)
      },
      removeProduct() {
        this.$emit('remove-product')
      },
      updateCountValue(newValue) {
        this.$emit('update-count', newValue)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .count-wrapper {
    display: flex;

    height: 50px;
  }

  .count-control {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 100%;

    border: none;
    background-color: #ffffff;

    text-align: center;
    font-size: 14px;
    color: #000000;
  }

  .icon {
    width: 10px;
    height: 10px;
  }
</style>
