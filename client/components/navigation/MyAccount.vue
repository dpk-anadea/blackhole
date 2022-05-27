<template>
  <div class="my-account">
    <span>My Account</span>
    <div class="account-drop-down">
      <router-link
        v-for="link in links"
        :key="link.name"
        class="account-link"
        :to="{ name: link.name }">
        {{ link.name }}
      </router-link>

      <button @click="logout" class="button account-link">Logout</button>
    </div>
  </div>
</template>

<script>
  import { action } from '@/store/constants'
  import { mapActions } from 'vuex'

  export default {
    name: 'MyAccountNav',
    data() {
      return {
        links: [{ name: 'Orders' }, { name: 'Downloads' }]
      }
    },
    methods: {
      ...mapActions([action.LOGOUT]),

      async logout() {
        await this[action.LOGOUT]()
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-account {
    position: relative;

    display: flex;
    align-items: center;

    &:hover {
      .account-drop-down {
        display: flex;
      }
    }
  }

  .account-drop-down {
    z-index: 5;

    position: absolute;
    top: 100%;
    left: -22px;

    flex-direction: column;

    width: 135px;
    padding: 25px 20px 24px;

    background-color: var(--secondary-bg-color);
    .account-link {
      margin-left: 0;
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
    display: none;
  }

  .account-link {
    cursor: pointer;
    text-decoration: none;

    margin-left: 60px;

    color: var(--primary-color);
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      text-decoration: none;
      color: var(--secondary-color);
    }
  }

  .button {
    cursor: pointer;
    text-decoration: none;

    align-self: flex-start;

    padding: 0;

    border: none;

    color: var(--primary-text-color);
    background-color: transparent;
    font-size: 18px;
  }
</style>
