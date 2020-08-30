<template>
  <div class="home">
    <the-carousel></the-carousel>
    <!-- <offer-list></offer-list> -->
    <app-preview
      class="packages"
      title="Yatras"
      title-desc="...some text"
      :preview-items-list="packages"
    ></app-preview>
    <app-preview
      class="destinations"
      title="Destinations"
      title-desc="...some text"
      :preview-items-list="destinations"
    >
      <div class="columns">
        <div class="column">
          <button class="button">View All Destinations</button>
        </div>
      </div>
    </app-preview>
    <!-- <destinations></destinations> -->
  </div>
</template>

<script>
import TheCarousel from '../components/TheCarousel.vue';
// import OfferList from './OfferList.vue';
// import Destinations from './Destinations.vue';
import AppPreview from '../components/ui-components/AppPreview.vue';

export default {
  name: 'Home',
  components: {
    TheCarousel,
    AppPreview,
    // OfferList,
    // Destinations,
  },
  data() {
    return {
      apiClient: this.$http,
      BASE_URL: process.env.BASE_URL,
      packages: [],
      destinations: [],
    };
  },
  created() {
    this.getPackages();
    this.getDestinations();
  },
  methods: {
    getDestinations() {
      this.apiClient
        .get(`${this.BASE_URL}data/destinations.json`)
        .then((res) => {
          this.destinations = res.data.items;
        });
    },
    getPackages() {
      this.apiClient.get(`${this.BASE_URL}data/packages.json`).then((res) => {
        this.packages = res.data.items;
      });
    },
  },
};
</script>

<style lang="scss">
.home {
  .destinations {
    background: inherit;
    /deep/.hero-body, /deep/.title {
      color: #4a4a4a !important;
    }
  }
}
</style>
