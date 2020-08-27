<template>
  <div class="home">
    <the-carousel></the-carousel>
    <offer-list></offer-list>
  </div>
</template>

<script>
import TheCarousel from "../components/TheCarousel.vue";
import OfferList from "./OfferList.vue";
export default {
  name: "Home",
  components: {
    TheCarousel,
    OfferList,
  },
};
</script>

<style lang="scss">
.home{
  padding-top: 100px;
  }
</style>
