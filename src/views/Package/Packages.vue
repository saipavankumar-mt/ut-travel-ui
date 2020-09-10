<template>
  <app-preview
    class="packages"
    is-mobile
    :title="title"
    :title-desc="titleDesc"
    :preview-items-list="currentList"
    :is-model-two="true"
    :show-all="showAll"
    :scroll-class="scrollClass"
    toggle-btn-label="Packages"
    @changeview="() => showAll=!showAll"
  ></app-preview>
</template>

<script>
export default {
  name: "Packages",
  components: {},
  data() {
    return {
      title: "",
      titleDesc: "",
      packages: [],
      showAll: false,
    };
  },
  created() {
    this.getPackages();
  },
  methods: {
    getPackages() {
      this.$http
        .get(`${process.env.BASE_URL}data/packages.json`)
        .then((res) => {
          this.title = res.data.title;
          this.titleDesc = res.data.titleDesc;
          this.packages = res.data.items;
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
      return this.showAll ? this.packages : this.packages.slice(0, 4);
    },
  },
};
</script>

<style lang="scss">
.packages {
  background-image: url("../../assets/images/Ut-wallpaper.png");
  background-color: rgba(38, 38, 38, 0.6) !important;
  background-size: cover;
  background-blend-mode: overlay;
}
</style>
