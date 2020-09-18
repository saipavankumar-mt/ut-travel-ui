<template>
  <div class="home">
    <the-carousel></the-carousel>
    <packages></packages>
    <destinations></destinations>
    <!-- <destinations-old></destinations-old> -->
    <!-- <about-us></about-us> -->
  </div>
</template>

<script>
import TheCarousel from "../components/TheCarousel.vue";
import Packages from "./Package/Packages.vue";
import Destinations from "./Destination/Destinations.vue";

export default {
  name: "Home",
  components: {
    TheCarousel,
    Packages,
    Destinations,
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss">
// .home::-webkit-scrollbar {
//   display: none;
// }
.destination-container {
  padding-top: 15rem;
}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .destination-container {
    margin-top: unset;
  }
}
</style>
