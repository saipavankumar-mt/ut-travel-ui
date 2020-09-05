<template>
  <section class="similarpackage-section columns">
    <div class="column">
      <p class="title is-4">Similar Packages</p>
    </div>
    <app-preview-card class="column" v-for="(item, idx) in packages" :key="idx" :item="item"></app-preview-card>
  </section>
</template>

<script>
export default {
  name: "SimilarPackages",
  components: {},
  props: {
    itineraryId: String,
  },
  data() {
    return {
      packages: [],
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
          this.packages = res.data.items.filter(
            (item) => item.id !== this.itineraryId
          );
        });
    },
  },
};
</script>

<style lang="scss">
.similarpackage-section {
  flex-direction: column !important;
  /deep/ .preview-card {
    &:hover {
      box-shadow: none !important;
      transform: scale(1) !important;
    }
    border-radius: none !important;
    box-shadow: none !important;
  }

  border-radius: 5px;
  box-shadow: 0 0 10px 0px;
}
</style>
