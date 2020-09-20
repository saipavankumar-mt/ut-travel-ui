<template>
  <app-preview
    class="destinations"
    :category-info="destinationsData"
    route-category="destination-detail"
    toggle-btn-label="Destinations"
  ></app-preview>
</template>

<script>
export default {
  name: "Destinations",
  components: {},
  data() {
    return {
      title: "",
      titleDesc: "",
      destinations: [],
      showAll: false,
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
