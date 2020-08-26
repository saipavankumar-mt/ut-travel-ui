<template>
  <div class="carousel">
    <carousel :per-page="1" :mouse-drag="true">
      <slide v-for="item in carouselItem" :key="item.id" :tabindex="item.id">
        <div class="container">
          <img
            class="trekking"
            v-bind:src="require('../assets/' + item.image)"
            v-bind:alt="item.image"
          />
          <div class="text">
            <div class="sub-text">{{ item.textOverImage }}</div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'TheCarousel',
  components: {
    Carousel,
    Slide,
  },
  data: function() {
    return {
      carouselItem: [
        {
          image: 'trekking.png',
          textOverImage: 'Slide 1',
          id: 1,
        },
        {
          image: 'trekking.png',
          textOverImage: 'Slide 2',
          id: 2,
        },
      ],
    };
  },
  methods: {
    getImgUrl: function(path) {
      console.log(path);
      return require(path);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.container {
  position: relative;
}

.trekking {
  object-fit: cover;
  width: 100%;
  height: 500px;
}

.text {
  position: absolute;
  color: white;
  top: 25%;
  left: 25%;
}
</style>
