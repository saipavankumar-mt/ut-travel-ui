<template>
  <div class="packages">
    <app-preview
      v-for="curPackage in packages"
      :key="curPackage.key"
      :class="`packages-${curPackage.key.toLowerCase()}`"
      is-mobile
      :title="curPackage.title"
      :preview-items-list="curPackage.items"
      :is-model-two="true"
      :show-all="showAll"
      :scroll-class="scrollClass"
      toggle-btn-label="Packages"
      @changeview="$router.push('./tour-packages')"
    ></app-preview>
  </div>
</template>

<script>
export default {
  name: 'Packages',
  components: {},
  data() {
    return {
      title: '',
      titleDesc: '',
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
        .get(`${process.env.BASE_URL}Data/packages-preview.json`)
        .then((res) => {
          this.packages = res.data;
        });
    },
  },
  computed: {
    scrollClass() {
      return this.title
        .split(' ')
        .map((s) => s.toLowerCase())
        .join('-');
    },
    // currentList() {
    //   return this.showAll ? this.packages : this.packages.slice(0, 4);
    // },
  },
};
</script>

<style lang="scss">
.packages {
  background-color: inherit;
  // background-image: url("../../assets/images/Ut-wallpaper.png");
  // background-color: rgba(38, 38, 38, 0.6) !important;
  // background-size: cover;
  // background-blend-mode: overlay;
  // background-repeat: no-repeat;
  // background-position: center center;
  // background-attachment: fixed;
}
</style>
