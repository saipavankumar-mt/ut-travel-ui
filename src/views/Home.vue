<template>
  <div class="home">
    <the-carousel></the-carousel>
    <packages class="destination-container"></packages>
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
  margin-top: 5.5rem;
}
</style>
