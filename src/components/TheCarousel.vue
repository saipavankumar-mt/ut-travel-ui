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
      <b-carousel-item
        v-for="item in carouselItem"
        :key="item.id"
      >
        <div class="carousel-container">
          <img
            class="carousel-img"
            v-bind:src="require('../assets/' + item.image)"
            v-bind:alt="item.image"
          />
        </div>
        <vue-weather
          api-key="141973eab82fd1074988ffa8397b09bf"
          units="uk"
          :latitude="lat"
          :longitude="long"
          language="en"
        />
        <h3>{{currentTemp - 273.15 | number:'1.0-0'}}</h3>
      </b-carousel-item>
    </b-carousel>
    <!-- <carousel
      :per-page="1"
      :mouse-drag="true"
      :loop="true"
      :autoplay="true"
      :navigationEnabled="true"
      :navigationNextLabel="'>'"
      :navigationPrevLabel="'<'"
      :paginationPosition="'bottom-overlay'"
    >-->
    <!-- <slide v-for="item in carouselItem" :key="item.id" :tabindex="item.id">
        <div class="carousel-container">
          <img
            class="carousel-img"
            v-bind:src="require('../assets/' + item.image)"
            v-bind:alt="item.image"
    />-->
    <!-- <div class="carousel-content">
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
            <div class="carousel-right-content" v-if="item.price.showPrice">
              <div class="carousel-duration">
                <p>
                  <b>{{ item.nights }}</b> Nights /
                  <b>{{ item.days }}</b> Days
                </p>
              </div>
              <p>@</p>
              <div class="carousel-price">
                <p>&#8377; {{ item.price.value }}/-</p>
              </div>
              <div class="carousel-perperson">
                <p>PER PERSON</p>
              </div>
            </div>
    </div>-->
    <!-- </div>
      </slide>
    </carousel>-->
    <available-packages-list class="available"></available-packages-list>
  </div>
</template>

<script>
import VueWeather from 'vue-weather-widget';
export default {
  name: 'TheCarousel',
  components: {
    VueWeather,
  },
  data: function () {
    return {
      slideIndex: 0,
      apiKey: '141973eab82fd1074988ffa8397b09bf',
      carouselItem: [],
      lat: '29.94791',
      long: '78.16025',
      currentTemp: '',
      minTemp: '',
      maxTemp: '',
      pressure: '',
      humidity: '',
      wind: '',
      overcast: '',
      icon: '',
      sunrise: '',
      sunset: '',
    };
  },
  beforeMount() {
    this.getWeather();
  },

  methods: {
    getWeather() {
      let url =
        `https://api.openweathermap.org/data/2.5/weather?APPID=${this.apiKey}` +
        `&lat=${this.lat}` +
        `&lon=${this.long}` +
        `&units=uk` +
        `&lang=en`;
      debugger;
      this.$http
        .get(url)
        .then((response) => {
          this.currentTemp = response.data.main.temp;
          this.minTemp = response.data.main.temp_min;
          this.maxTemp = response.data.main.temp_max;
          this.pressure = response.data.main.pressure;
          this.humidity = response.data.main.humidity + '%';
          this.wind = response.data.wind.speed + 'm/s';
          this.overcast = response.data.weather[0].description;
          this.icon =
            'images/' + response.data.weather[0].icon.slice(0, 2) + '.svg';
          this.sunrise = new Date(response.data.sys.sunrise * 1000)
            .toLocaleTimeString('en-GB')
            .slice(0, 4);
          this.sunset = new Date(response.data.sys.sunset * 1000)
            .toLocaleTimeString('en-GB')
            .slice(0, 4);
          debugger;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

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
