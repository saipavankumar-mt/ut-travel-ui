<template>
  <div class="vww__widget" :style="{ color: textColor }">
    <slot name="header">
      <div
        class="vww__header"
        :style="{ borderColor: barColor }"
        v-if="!hideHeader"
      >
        <slot name="title">
          <span class="vww__title">
            {{ `Weather for ${location.name}` }}
          </span>
        </slot>
      </div>
    </slot>

    <div class="vww__content" :style="{ backgroundColor: backgroundColor }">
      <div class="vww__loading" v-if="loading">
        <slot name="loading">
          <skycon
            condition="partly-cloudy-day"
            :color="textColor"
            :paused="disableAnimation"
          />
          <span class="vww__title">Loading...</span>
        </slot>
      </div>

      <div
        class="vww__error"
        v-else-if="error || !weather || !currently || !daily"
      >
        <slot name="error">
          <skycon
            condition="rain"
            :color="textColor"
            :paused="disableAnimation"
          />
          <span class="vww__title">{{ error || 'Something went wrong!' }}</span>
        </slot>
      </div>

      <template v-else>
        <div class="vww__currently">
          <div>
            <skycon
              :condition="currently.icon"
              size="80"
              :color="textColor"
              :paused="disableAnimation"
            />
            <div class="vww__temp">
              {{ Math.round(currently.temperature) }}&deg;

              <div v-if="isDownward">
                <svg viewBox="0 0 306 306" width="24" height="24">
                  <polygon
                    points="270.3,58.65 153,175.95 35.7,58.65 0,94.35 153,247.35 306,94.35"
                    :style="{ fill: textColor }"
                  />
                </svg>
              </div>
              <div v-else>
                <svg viewBox="0 0 306 306" width="24" height="24">
                  <polygon
                    points="35.7,247.35 153,130.05 270.3,247.35 306,211.65 153,58.65 0,211.65"
                    :style="{ fill: textColor }"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div class="vww__title">{{ locationName }}</div>
          <div class="vww__wind">
            Updated:
            {{ currently.dateTime | moment }}
            <span @click="hydrate()" class="refresh">
              <i class="fas fa-sync-alt"></i>
            </span>
          </div>
        </div>

        <div class="vww__daily" v-if="!hideWeek">
          <div class="vww__day" :key="day.time" v-for="day in daily">
            <span>{{ day.weekName }}</span>
            <span>
              <skycon
                style="display: block"
                :condition="day.icon"
                size="26"
                :color="textColor"
                :paused="disableAnimation"
              />
            </span>
            <div class="vww__day-bar">
              <div :style="{ height: `${day.top}%` }">
                <span>{{ Math.round(day.temperatureMax) }}&deg;</span>
              </div>
              <div
                :style="{
                  borderRadius: '10px',
                  background: barColor,
                  height: `${day.height}%`,
                }"
              >
                &nbsp;
              </div>
              <div :style="{ height: `${day.bottom}%` }">
                <span>{{ Math.round(day.temperatureMin) }}&deg;</span>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Utils from './../../utils/weather';
import Skycon from 'vue-skycons';
import moment from 'moment';

export default {
  name: 'AppWeatherForcast',

  components: {
    Skycon,
  },

  filters: {
    moment: function(date) {
      return moment(date).format('DD/M, LT');
    },
  },
  props: {
    // Pass true to use DarkSky API, otherwise it will use OpenWeatherMap API
    useDarkSkyApi: {
      type: Boolean,
      default: false,
    },

    // Your Dark Sky / OpenWeatherMap secret key
    // apiKey: {
    //   type: String,
    //   required: true,
    // },

    // Address to lookup location.
    address: {
      type: String,
    },

    // The latitude of a location (in decimal degrees).
    // Positive is north, negative is south.
    latitude: {
      type: String,
    },

    // The longitude of a location (in decimal degrees).
    // Positive is east, negative is west.
    longitude: {
      type: String,
    },

    locationName: {
      type: String,
    },

    // Return summary properties in the desired language.
    // For list of supported languages, visit https://darksky.net/dev/docs/forecast
    language: {
      type: String,
      default: 'en',
    },

    // Return weather conditions in the requested units.
    // For list of supported units, visit https://darksky.net/dev/docs/forecast
    units: {
      type: String,
      default: 'us',
    },

    // Controls whether to show or hide the title bar.
    hideHeader: {
      type: Boolean,
      default: false,
    },

    hideWeek: {
      type: Boolean,
      default: false,
    },

    // Auto update interval in milliseconds
    updateInterval: {
      type: Number,
    },

    // Use static skycons
    disableAnimation: {
      type: Boolean,
      default: false,
    },

    // Color of the Temparature bar. Default: '#444'
    barColor: {
      type: String,
      default: '#444',
    },

    backgroundColor: {
      type: String,
      default: '',
    },
    // Color of the text. Default: '#333'
    textColor: {
      type: String,
      default: '#333',
    },
  },

  data() {
    return {
      loading: true,
      weather: null,
      error: null,
      location: {},
      timeout: null,
    };
  },

  watch: {
    // apiKey: 'hydrate',
    address: 'hydrate',
    latitude: 'hydrate',
    longitude: 'hydrate',
    language: 'hydrate',
    units: 'hydrate',
    updateInterval: 'hydrate',
  },

  mounted() {
    this.hydrate();
  },

  destroyed() {
    clearTimeout(this.timeout);
  },

  computed: {
    currently() {
      return this.weather.currently;
    },
    isDownward() {
      const hourly = this.weather.hourly.data;
      // debugger;
      const time = new Date().getTime() / 1e3;
      for (let i = 0; i < hourly.length; i++) {
        if (hourly[i].time <= time) continue;
        return hourly[i].temperature < this.currently.temperature;
      }
      return false;
    },
    windBearing() {
      const t = Math.round(this.currently.windBearing / 45);
      return ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N'][t];
    },
    daily() {
      const forecasts = [];
      let globalMaxTemp = -Infinity;
      let globalMinTemp = Infinity;

      const tomorrow = new Date(new Date().toDateString());
      const today = tomorrow.getTime() / 1e3 + 24 * 3600 - 1;

      const daily = this.weather.daily.data;
      for (let i = 0; i < daily.length; i++) {
        const day = daily[i];
        if (day.temperatureMax > globalMaxTemp) {
          globalMaxTemp = day.temperatureMax;
        }
        if (day.temperatureMin < globalMinTemp) {
          globalMinTemp = day.temperatureMin;
        }
        forecasts.push(Object.assign({}, day));
      }

      const tempRange = globalMaxTemp - globalMinTemp;
      for (let i = 0; i < forecasts.length; ++i) {
        const day = forecasts[i];
        if (day.time <= today) {
          day.weekName = 'Today';
        } else {
          day.weekName = new Date(day.time * 1000).toLocaleDateString(
            this.language,
            {
              weekday: 'short',
            }
          );
        }
        const max = day.temperatureMax;
        const min = day.temperatureMin;
        day.height = Math.round((100 * (max - min)) / tempRange);
        day.top = Math.round((100 * (globalMaxTemp - max)) / tempRange);
        day.bottom = 100 - (day.top + day.height);
      }
      return forecasts;
    },
  },

  methods: {
    moment: function() {
      return moment();
    },
    loadWeather() {
      const fetchWeatherMethod = Utils.fetchOWMWeather;
      return fetchWeatherMethod({
        apiKey: '141973eab82fd1074988ffa8397b09bf',
        lat: this.latitude,
        lng: this.longitude,
        units: this.units,
        language: this.language,
      }).then((data) => {
        this.$set(this, 'weather', data);
      });
    },

    autoupdate() {
      clearTimeout(this.timeout);
      const time = Number(this.updateInterval);
      if (!time || time < 10 || this.destroyed) {
        return;
      }
      this.timeout = setTimeout(() => this.hydrate(false), time);
    },

    hydrate(setLoading = true) {
      this.$set(this, 'loading', setLoading);
      return this.$nextTick()
        .then(this.loadWeather)
        .then(() => {
          this.$set(this, 'error', null);
        })
        .catch((err) => {
          console.error(err);
          this.$set(this, 'error', '' + err);
        })
        .finally(() => {
          this.$set(this, 'loading', false);
          this.autoupdate();
        });
    },

    // processLocation() {
    //   return Utils.reverseGeocode(this.latitude, this.longitude).then(
    //     (data) => {
    //       this.$set(this, 'location', {
    //         lat: this.latitude,
    //         lng: this.longitude,
    //         name: `${data.region}, ${data.country}`,
    //       });
    //     }
    //   );
    // },
  },
};
</script>

<style>
.vww__widget {
  width: 100%;
  min-width: 200px;
  max-width: 800px;
}

.vww__header {
  position: relative;
  padding: 10px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

.vww__title {
  font-size: 18px;
  font-weight: bold;
  text-transform: capitalize;
}

.vww__content {
  min-height: 150px;
  height: 180px;
  display: flex;
  align-items: center;
  padding: 8px;
  overflow: hidden;
  /* background: ; */
}

.vww__loading {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.vww__loading span {
  display: block;
  margin-left: 10px;
}

.vww__error {
  width: 100%;
  text-align: center;
}
.vww__error span {
  display: block;
  padding: 10px;
}

.vww__currently {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.vww__currently > div {
  display: flex;
  align-items: center;
  font-weight: 700;
}

.vww__temp {
  padding: 0 10px;
  font-size: 50px;
  font-weight: bold;
  line-height: 0.65em;
}

.vww__temp > div {
  display: block;
  text-align: center;
  padding-right: 10px;
}

.vww__wind {
  font-size: 14px;
}

.refresh {
  padding-left: 6px;
  cursor: pointer;
}

.vww__daily {
  display: none;
  height: 100%;
}

@media screen and (min-width: 600px) {
  .vww__currently {
    width: 200px;
  }
  .vww__daily {
    display: block;
    height: 100%;
    width: calc(100% - 200px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x: auto;
  }
}

.vww__day {
  height: 100%;
  text-align: start;
  position: relative;
  min-width: 50px;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}

.vww__day > span {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
}

.vww__day-bar {
  margin-top: 20px;
  width: 30px;
  height: calc(100% - 100px);
}

.vww__day-bar div {
  margin: 0 5px;
  display: flex;
}

.vww__day-bar div:first-child {
  align-items: flex-end;
}

.vww__day-bar div:last-child {
  align-items: flex-start;
}

.vww__day-bar span {
  display: block;
  font-size: 12px;
}
</style>
