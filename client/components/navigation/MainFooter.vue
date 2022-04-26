<template>
  <footer class="footer">
    <a class="cymantics"> © 2022, Cymatics.fm. </a>
    <div v-for="(item, index) of stat" :key="'item' + index">
      <a class="cymantics cymantics-item">{{ item.name }}</a>
    </div>
    <div>
      <a class="cymantics social-network"><FacebookIcon class="icon" /></a>
      <a class="cymantics social-network"><InstagramIcon class="icon" /></a>
      <a class="cymantics social-network"><LinkedlnIcon class="icon" /></a>
    </div>
  </footer>
</template>

<script setup>
  import FacebookIcon from '@/components/icons/FacebookIcon'
  import InstagramIcon from '@/components/icons/InstagramIcon'
  import LinkedlnIcon from '@/components/icons/LinkedlnIcon'

  const stat = [
    { name: 'Privacy Policy' },
    { name: 'Terms of Use' },
    { name: 'Terms of Service' },
    { name: 'Contact' }
  ]
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 30px;
    height: 73px;

    color: #282828;
    background-color: #1d1c1c;
  }

  .cymantics {
    cursor: pointer;

    &:hover {
      color: white;
    }
  }

  .social-network {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .icon {
    width: 20px;
  }
</style>
