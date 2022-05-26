<template>
  <BaseModal modal-frame-style="width: 700px;" @close="$emit('close')">
    <div class="thanks-modal-wrapper">
      <h2 class="title">Thank you for buy</h2>
      <p class="description">
        Your payment was successful. To see the receipt click
        <a :href="order.receipt_url" target="_blank" class="receipt-link"
          >here</a
        >.
      </p>
    </div>
  </BaseModal>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { get } from '@/store/constants'

  import BaseModal from '@/components/modals/BaseModal'

  export default {
    name: 'ThanksForBuyModal',
    components: {
      BaseModal
    },
    computed: {
      ...mapGetters({ order: get.ORDER })
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
  }

  .description {
    margin-top: 20px;

    text-align: center;
  }

  .receipt-link {
    text-decoration: none;
    color: var(--link-color);

    &:hover {
      color: var(--link-hover-color);
    }
  }
</style>
