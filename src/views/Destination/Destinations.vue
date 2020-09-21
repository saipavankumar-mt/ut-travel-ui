<template>
  <app-preview
    class="destinations"
    :category-info="destinationsData"
    route-category="destination-detail"
  ></app-preview>
</template>

<script>
export default {
  name: "Destinations",
  components: {},
  data() {
    return {
      destinationsData: {},
    };
  },
  created() {
    this.getDestinations();
  },
  methods: {
    // scrollToView(className) {
    //   this.showAll = !this.showAll;
    //   if (this.showAll) {
    //     document.querySelector('.' + className).scrollIntoView({
    //       behavior: 'smooth',
    //     });
    //   }
    // },
    getDestinations() {
      this.$http
        .get(`${process.env.BASE_URL}Data/destinations-preview.json`)
        .then((res) => {
          this.destinationsData = res.data;
        });
    },
  },
};
</script>

<style lang="scss">
.destinations {
  background: inherit;
}
</style>
