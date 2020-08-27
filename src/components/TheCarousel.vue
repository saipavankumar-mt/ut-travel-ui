<template>
  <div class="carousel">
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :loop="true"
      :navigationEnabled="true"
      :navigationNextLabel="'>'"
      :navigationPrevLabel="'<'"
      :paginationPosition="bottom-overlay"
    >
      <slide v-for="item in carouselItem" :key="item.id" :tabindex="item.id">
        <div class="container">
          <img
            class="trekking"
            v-bind:src="require('../assets/' + item.image)"
            v-bind:alt="item.image"
          />
        </div>
        <div class="title">
          <div class="sub-title">Yatra</div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "TheCarousel",
  components: {
    Carousel,
    Slide,
  },
  data: function () {
    return {
      carouselItem: [
        {
          image: "ChardamPackage/CharDhamCombinedHeroImage.jpg",
          textOverImage: "Slide 1",
          id: 1,
        },
        {
          image: "NewImage.png",
          textOverImage: "Slide 2",
          id: 2,
        },
      ],
    };
  },
  methods: {
    getImgUrl: function (path) {
      console.log(path);
      return require(path);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.VueCarousel-navigation-prev {
  left: 40px !important;
  font-size: 42px;
  outline: none !important;
  color: white !important;
  &:hover {
    font-weight: 800;
  }
}

.VueCarousel-navigation-next {
  right: 40px !important;
  font-size: 42px;
  outline: none !important;
  color: white !important;
  &:hover {
    font-weight: 800;
  }
}
.container {
  position: relative;
  width: 100%;
  left: 0%;
  height: 500px;
  top: 0%;
}

.title {
  position: relative;

  .sub-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}

.trekking {
  width: 100%;
  height: 500px;
}

.slide-ease {
  transition: 5s fade-in;
}

.text {
  position: absolute;
  color: white;
  top: 25%;
  left: 25%;
}
</style>
