<template>
  <div id="app">
    <the-carousel></the-carousel>
  </div>
</template>

<script>
import TheCarousel from './components/TheCarousel.vue';

export default {
  name: 'App',
  components: {
    TheCarousel,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
