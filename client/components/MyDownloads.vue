<template>
  <section class="downloads-wrapper">
    <h1 class="title">My Downloads</h1>

    <div v-if="orders.length" class="order-wrapper">
      <section class="order-section" v-for="item in downloads" :key="item.id">
        <div class="order-content">{{ item.product.name }}</div>
        <a href="#" class="order-content" download=""><IconDownload /></a>
      </section>
    </div>

    <div v-else class="hint">You haven't placed any downloads yet.</div>
  </section>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import { action, get } from '@/store/constants'
  import IconDownload from '@/components/icons/IconDownload'

  export default {
    name: 'MyDownloads',
    components: {
      IconDownload
    },
    computed: {
      ...mapGetters({
        user: get.CURRENT_USER,
        orders: get.ORDERS
      }),
      downloads() {
        const itemsForDownload = []
        this.orders.filter((el) => itemsForDownload.push(el.orderItems))
        return itemsForDownload.flat()
      }
    },
    async created() {
      if (!this.orders.length) {
        await this[action.GET_ORDERS](this.user.id)
      }
    },
    methods: {
      ...mapActions([action.GET_ORDERS])
    }
  }
</script>

<style scoped>
  .downloads-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    padding: 50px;

    background-color: #222222;
  }

  .title {
    margin-bottom: 30px;

    font-size: 38px;
    font-weight: 500;
  }

  .order-wrapper {
    width: 100%;
  }

  .order-section {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 70px;
    width: 100%;
    padding: 0 40px;
    margin-bottom: 15px;

    border-radius: 15px;
    box-shadow: 3px -1px 6px black;

    background-color: #1d1c1c;
  }

  .hint {
    align-self: flex-start;

    color: #dddddd;
  }
</style>
