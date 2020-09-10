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
import Packages from "./Packages.vue";
import Destinations from "./Destinations.vue";

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

<style lang="scss"></style>
