<template>
  <div class="home">
    <the-carousel></the-carousel>
    <offer-list></offer-list>
    <destinations></destinations>
  </div>
</template>

<script>
import TheCarousel from "../components/TheCarousel.vue";
import OfferList from "./OfferList.vue";
import Destinations from "./Destinations.vue";
export default {
  name: "Home",
  components: {
    TheCarousel,
    OfferList,
    Destinations,
  },
};
</script>

<style lang="scss">
.home {
  padding-top: 5rem;
}
</style>
