<template>
  <div class="home-page-wrapper">
    <!-- Header -->
    <HeaderSection />

    <!--Download section -->
    <section class="free-download-wrapper">
      <h1 class="free-download-title">
        1.1GB OF FREE SAMPLES (Limited Time Only)
      </h1>
      <div class="free-download-sub-title">
        Exclusive Samples Designed By 3x Grammy Winning Producer S1 for <del class="cross-out-figure">$75</del> FREE
      </div>
      <button class="free-download-button">
        Free Download
      </button>
    </section>

    <!--Products selection -->
    <main class="plugins-selection-wrapper">
      <h2 class="plugins-selection-title">
        Download our free plugins to level up your music production
      </h2>
      <div class="products-list">
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </main>

    <div class="wrapper-packs">
      Download our most popular free sample packs
    </div>

    <!--Footer -->
    <FooterSection />
  </div>
</template>

<script>
import HeaderSection from "@/components/Header";
import ProductItem from "@/components/ProductItem";
import FooterSection from "@/components/Footer";

export default {
  name: 'HelloWorld',
  components: {
    FooterSection,
    ProductItem,
    HeaderSection
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.free-download-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 320px;
  padding: 40px 20px;

  background-color: black;
}

.free-download-title {
  margin: 0 0 20px;

  background: linear-gradient(to bottom right, #F05A28 20%, #EC008C 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 50px;
}

.free-download-sub-title {
  margin-bottom: 30px;

  color: white;
  font-size: 27px;
}

.cross-out-figure {
  color: #FFFFFF;
  opacity: 0.7;
}

.free-download-button {
  text-align: center;
  cursor: pointer;

  border: none;

  width: 360px;
  height: 60px;

  color: white;
  background: linear-gradient(to bottom right, #F05A28 20%, #EC008C 100%);
  font-size: 27px;

  &:hover {
    background: linear-gradient(to bottom right, #EC008C 20%, #F05A28 100%);
  }
}

.plugins-selection-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #1d1c1c;
}

.plugins-selection-title {
  margin: 40px 0 60px;

  color: white;
  font-size: 38px;
}

.products-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 0 0 50px;
  gap: 35px;
  width: 100%;
}

.wrapper-packs {
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 30px;

  color: white;
  background-color: black;
  font-size: 30px;
}
</style>

<style>
 body {
   margin: 0;
 }
</style>
