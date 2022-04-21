<template>
  <section class="email-verify-section">
    <h1 class="title">Please verify email</h1>
  </section>
</template>

<script>
  export default {}
</script>

<style>
  .email-verify-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: calc(100vh - 72px);
    padding: 30px 60px 100px;

    background-color: #1d1c1c;
  }

  .title {
    font-weight: 600;
    color: #ffffff;
  }
</style>
