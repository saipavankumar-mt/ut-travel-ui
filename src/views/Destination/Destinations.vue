<template>
  <app-preview
    class="destinations"
    :title="title"
    :title-desc="titleDesc"
    :preview-items-list="currentList"
    :show-all="showAll"
    :scroll-class="scrollClass"
    toggle-btn-label="Destinations"
    @changeview="() => showAll=!showAll"
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
        .get(`${process.env.BASE_URL}Data/destinations.json`)
        .then((res) => {
          this.title = res.data.title;
          this.titleDesc = res.data.titleDesc;
          this.destinations = res.data.items;
        });
    },
  },
  computed: {
    scrollClass() {
      return this.title
        .split(" ")
        .map((s) => s.toLowerCase())
        .join("-");
    },
    currentList() {
      return this.showAll ? this.destinations : this.destinations.slice(0, 8);
    },
  },
};
</script>

<style lang="scss">
.destinations {
  background-image: url("../../assets/images/DeoriyaTal.png");
  background-size: cover;
  background-blend-mode: overlay;
  background-color: #363636;
  /deep/ .preview-all {
    transition: all 0.3s ease-in-out;
  }
}
</style>
