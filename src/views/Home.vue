<template>
  <div class="home">
    <the-carousel></the-carousel>
    <!-- <offer-list></offer-list> -->
    <app-preview
      class="packages"
      title="Devotional Yatras"
      title-desc="Beautiful mountain, crystal-clear lakes, famous temples and greenery
            all over is Nainital for you. Popularly known as the City of Lakes,
            Nainital is an idyllic escape from the humdrum of city life.
            Enveloped in a thick foil of nature, accentuated by the scent of the
            flowering blossoms blending miraculously in the crisp fresh air,
            Nainital is truly the treasure trove of Kumano. It is among the most
            visited hill station of the North India since British period."
      :preview-items-list="packages"
    ></app-preview>
    <app-preview
      class="packages"
      title="Destinations"
      title-desc="Beautiful mountain, crystal-clear lakes, famous temples and greenery
            all over is Nainital for you. Popularly known as the City of Lakes,
            Nainital is an idyllic escape from the humdrum of city life.
            Enveloped in a thick foil of nature, accentuated by the scent of the
            flowering blossoms blending miraculously in the crisp fresh air,
            Nainital is truly the treasure trove of Kumano. It is among the most
            visited hill station of the North India since British period."
      :preview-items-list="packagesNew"
      :isModelTwo="true"
    >
      <div class="columns">
        <div class="column">
          <button class="button">View All Destinations</button>
        </div>
      </div>
    </app-preview> 
    <destinations></destinations>
    <app-preview
      class="packages"
      title="Destinations"
      title-desc="Beautiful mountain, crystal-clear lakes, famous temples and greenery
            all over is Nainital for you. Popularly known as the City of Lakes,
            Nainital is an idyllic escape from the humdrum of city life.
            Enveloped in a thick foil of nature, accentuated by the scent of the
            flowering blossoms blending miraculously in the crisp fresh air,
            Nainital is truly the treasure trove of Kumano. It is among the most
            visited hill station of the North India since British period."
      :preview-items-list="destinations"
    >
      <div class="columns">
        <div class="column">
          <button class="button">View All Destinations</button>
        </div>
      </div>
    </app-preview>    
  </div>
</template>

<script>
import TheCarousel from '../components/TheCarousel.vue';
// import OfferList from './OfferList.vue';
import Destinations from './Destinations.vue';
import AppPreview from '../components/ui-components/AppPreview.vue';

export default {
  name: 'Home',
  components: {
    TheCarousel,
    AppPreview,
    // OfferList,
    Destinations,
  },
  data() {
    return {
      apiClient: this.$http,
      BASE_URL: process.env.BASE_URL,
      packages: [],
      destinations: [],
      packagesNew: [],
    };
  },
  created() {
    this.getPackages();
    this.getDestinations();
    this.getPackagesNew();
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
    getPackagesNew() {
      this.apiClient.get(`${this.BASE_URL}data/packages-new.json`).then((res) => {
        this.packagesNew = res.data.items;
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

  .packages{
    background-image: url('../assets/images/DeoriyaTal.jpg');
    
  }
}
</style>
