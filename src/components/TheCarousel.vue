<template>
  <div class="carousel">
    <b-carousel
      v-model="slideIndex"
      animated="slide"
      :has-drag="true"
      :autoplay="true"
      :interval="3000"
      :repeat="true"
      :pause-hover="true"
      :pause-info="false"
      icon-size="is-medium"
    >
      <b-carousel-item v-for="(item, id) in carouselItem" :key="id">
        <div class="carousel-container">
          <img
            class="carousel-img"
            v-bind:src="require('../assets/' + item.image)"
            v-bind:alt="item.image"
          />
        </div>
        <div class="weather-forcast" v-if="item.weather.showWeatherForcast">
          <app-weather-forcast
            v-for="(forcast, id) in item.weather.location"
            :key="id"
            api-key="141973eab82fd1074988ffa8397b09bf"
            units="uk"
            :latitude="forcast.lat"
            :longitude="forcast.long"
            language="en"
            :hide-header="hideHeader"
            :hide-week="hideWeek"
            :text-color="textColor"
          />
        </div>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
import AppWeatherForcast from '../components/ui-components/AppWeatherForcast';
export default {
  name: 'TheCarousel',
  components: {
    AppWeatherForcast,
  },

  data: function() {
    return {
      slideIndex: 0,
      apiKey: '141973eab82fd1074988ffa8397b09bf',
      carouselItem: [],
      lat: '29.94791',
      long: '78.16025',
      textColor: '#fff',
      disableAnimation: false,
      hideHeader: true,
      hideWeek: true,
    };
  },
  created() {
    this.$http
      .get(`${process.env.BASE_URL}Data/carousel.json`)
      .then((response) => {
        this.carouselItem = response.data.items;
      });
    // this.getWeather();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.weather-forcast {
  position: absolute;
  top: 0;
  left: 0;
}
.available {
  position: absolute;
  top: 82%;
  z-index: 10;
  width: 100%;
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
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // width: 50%;
  // height: 120%;
  // margin-left: 2.5%;
  // justify-content: center;
  padding-top: 15%;
  padding-left: 5%;
}

.carousel-title {
  display: flex;
  justify-content: flex-start;
  font-family: 'SFProDisplay-Bold';
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
  text-align: left;
  padding: 10px 40% 0 0;
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
    font-family: 'Brush Script MT';
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
    font-family: 'Brush Script MT';
  }
}

.carousel-perperson {
  padding-bottom: 2rem;
}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .carousel-slide {
  }

  .carousel-right-content {
    width: 25%;
    font-size: 18px;
  }

  .carousel-left-content {
    padding-left: 8%;
    padding-top: 45%;
  }

  .carousel-title {
    p {
      font-size: 2rem;
    }
  }

  .carousel-perperson {
    padding: unset;
    font-size: 18px;
  }

  .carousel-price {
    p {
      font-size: 18px;
    }
  }

  .carousel-desc {
    padding: 10px 0 0 0;
  }
  .carousel-duration {
    p {
      font-size: 18px;
    }
  }

  .available {
    position: unset;
    top: unset;
    z-index: unset;
  }

  .carousel .carousel-items {
    height: 14rem;
    .carousel-img {
      height: 14rem;
    }
  }
}
</style>
