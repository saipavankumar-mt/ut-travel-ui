<template>
  <div id="app">
    <the-carousel></the-carousel>
    <offer-list></offer-list>
  </div>
</template>

<script>
import TheCarousel from './components/TheCarousel.vue';
import OfferList from './components/OfferList.vue';
export default {
  name: 'App',
  components: {
    TheCarousel,
    OfferList
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;    
  width: 100%;
}
</style>
