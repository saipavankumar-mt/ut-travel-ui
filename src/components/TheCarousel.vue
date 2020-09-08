<template>
  <div class="carousel">
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :loop="true"
      :navigationEnabled="true"
      :navigationNextLabel="'>'"
      :navigationPrevLabel="'<'"
      :paginationPosition="'bottom-overlay'"
    >
      <slide v-for="item in carouselItem" :key="item.id" :tabindex="item.id">
        <div class="carousel-container">
          <img
            class="carousel-img"
            v-bind:src="require('../assets/' + item.image)"
            v-bind:alt="item.image"
          />
          <div class="carousel-content">
            <div class="carousel-left-content">
              <div class="carousel-title">
                <p>{{ item.title }}</p>
              </div>
              <div class="carousel-subtitle">
                <p>{{ item.subtitle }}</p>
              </div>
              <div class="carousel-route">
                <p>{{ item.route }}</p>
              </div>
              <div class="carousel-desc">
                <p>{{ item.description }}</p>
              </div>
            </div>
            <div class="carousel-right-content">
              <div class="carousel-duration">
                <p>
                  <b>{{ item.nights }}</b> Nights /
                  <b>{{ item.days }}</b> Days
                </p>
              </div>
              <div v-if="item.price.showPrice">
                <p>@</p>
                <div class="carousel-price">
                  <p>&#8377; {{ item.price.value }}/-</p>
                </div>
                <div class="carousel-perperson">
                  <p>PER PERSON</p>
                </div>
              </div>
            </div>
          </div>
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
      carouselItem: [],
    };
  },
  methods: {},
  created() {
    this.$http
      .get(`${process.env.BASE_URL}Data/carousel.json`)
      .then((response) => {
        this.carouselItem = response.data.items;
      });
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
.carousel-container {
  position: relative;
  width: 100%;
  left: 0%;
  height: 550px;
  top: 0%;
  img {
    object-fit: fill;
  }
}

.carousel-img {
  width: 100%;
  height: 550px;
}

.text {
  position: absolute;
  color: white;
  top: 25%;
  left: 25%;
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

.carousel-content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.4) !important;
  justify-content: space-between;
}

.carousel-left-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 120%;
  margin-left: 2.5%;
  justify-content: center;
}

.carousel-title {
  display: flex;
  justify-content: flex-start;
  font-family: "SFProDisplay-Bold";
}

.carousel-title p {
  font-size: 3rem;
  color: white;
}

.carousel-subtitle {
  align-self: flex-end;
  p {
    color: yellow;
    font-size: 0.8rem;
  }
}

.carousel-route {
  align-self: center;
  padding: 0.2rem;
  p {
    color: rgb(200, 248, 27);
    font-size: 1rem;
  }
}

.carousel-desc {
  align-self: center;
  p {
    color: #efbb20;
    font-size: 0.8rem;
  }
}

.carousel-right-content {
  top: 0%;
  display: flex;
  color: white;
  flex-direction: column;
  width: 12.5%;
  height: fit-content;
  background: rgba(229, 78, 43, 0.2);
  margin-right: 15%;
  border: white;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-radius: 0px 0px 1rem 1rem;
}

.carousel-duration {
  padding: 0.5rem;
  align-self: center;
  p {
    font-size: 2.1rem;
    font-family: "Brush Script MT";
  }
}

.carousel-price {
  padding: 0.5rem;
  p {
    border: none;
    //border-radius: 40px 10px;
    border-radius: 30px/10px;
    background: rgb(229, 78, 43);
    font-size: 2.1rem;
    font-family: "Brush Script MT";
  }
}

.carousel-perperson {
  padding-bottom: 2rem;
}
</style>
