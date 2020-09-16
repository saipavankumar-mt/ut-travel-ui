<template>
  <section class="similarpackage-section columns">
    <div class="similarpackages-title column">
      <h2>
        <span>SIMILAR PACKAGES</span>
      </h2>
    </div>
    <app-preview-card
      class="column"
      v-for="(item, idx) in packages"
      :key="idx"
      :item="item"
      :app-preview-settings="appPreviewSettings"
      @viewMoreClick="onViewMoreClicked"
    ></app-preview-card>
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
      appPreviewSettings: {
        showHover: false,
        cardContent: "card-setting",
        cardImage: {
          imageSize: "is-5by3",
        },
        imageBlurOnHover: true,
        hoverAction: {
          text: "View Package",
          type: "BUTTON",
        },
      },
    };
  },
  created() {
    this.getPackages();
  },
  methods: {
    onViewMoreClicked(value) {
      // this.redirect(value);
      this.$emit("similarPackageRouteChange", value);
    },

    getPackages() {
      this.$http
        .get(`${process.env.BASE_URL}Data/packages.json`)
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

.similarpackages-title {
  h2 {
    text-transform: capitalize;
    font: 20px/30px "open_sansbold";
    span {
      color: #4a5258;
    }
  }
}
</style>
