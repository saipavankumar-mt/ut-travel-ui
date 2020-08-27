<template>
  <div id="app">
    <the-carousel></the-carousel>
    <div class="offer-container">
      <div class="offer-title" v-for="item in offer" :key="item.id">
        <offer :offer-info="item"></offer>
      </div>
    </div>
  </div>
</template>

<script>
import TheCarousel from './components/TheCarousel.vue';
import Offer from './components/Offer.vue';

export default {
  name: 'App',
  components: {
    TheCarousel,
    Offer,
  },
  data() {
    return {
      offer: [
        {
          id: 1,
          name: 'Holiday',
          offerPer: 10,
          image: 'ChardamPackage/YamunotriDham.jpg',
        },
        {
          id: 2,
          name: 'Chaar Dhaam',
          offerPer: 10,
          image: 'ChardamPackage/YamunotriDham.jpg',
        },
        {
          id: 3,
          name: 'Trekking',
          offerPer: 10,
          image: 'ChardamPackage/YamunotriDham.jpg',
        },
        {
          id: 4,
          name: 'Car Hire',
          offerPer: 10,
          image: 'ChardamPackage/YamunotriDham.jpg',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.offer-container {
  display: flex;
  justify-content: space-between;
}

.offer-title {
  width: 100%;
}
</style>
