<template>
  <div class="home">
    <the-carousel></the-carousel>
    <packages></packages>
    <destinations></destinations>
    <destinations-old></destinations-old>
  </div>
</template>

<script>
import TheCarousel from '../components/TheCarousel.vue';
// import OfferList from './OfferList.vue';
import Packages from './Packages.vue';
import Destinations from './Destinations.vue';
import DestinationsOld from './DestinationsOld.vue';

export default {
  name: 'Home',
  components: {
    TheCarousel,
    // OfferList,
    Packages,
    Destinations,
    DestinationsOld,
  },
};
</script>

<style lang="scss">
</style>
