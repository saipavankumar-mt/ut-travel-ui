<template>
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
</template>

<script>
import AppPreview from '../components/ui-components/AppPreview.vue';

export default {
  name: 'Destinations',
  components: {
    AppPreview,
  },
  data() {
    return {
      destinations: [],
    };
  },
  create() {
    this.getDestinations();
  },
  methods: {
    getDestinations() {
      this.$http
        .get(`${process.env.BASE_URL}data/destinations.json`)
        .then((res) => {
          this.destinations = res.data.items;
        });
    },
  },
};
</script>

<style lang="scss">
// .destination {
//   background-image: linear-gradient(-95deg, rgb(97, 192, 242), #f8f8f8);
//   padding-left: 25px !important;
//   padding-right: 25px !important;
//   border-radius: 5px !important;
// }
.destinations {
  background: inherit;
  /deep/.hero-body,
  /deep/.title {
    color: #4a4a4a !important;
  }
}
</style>
