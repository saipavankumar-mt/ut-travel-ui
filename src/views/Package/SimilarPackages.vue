<template>
  <section class="similarpackage-section columns">
    <div class="similarpackages-title column">
      <h2>
        <span>SIMILAR PACKAGES</span>
      </h2>
    </div>
    <template v-if="!$isMobile()">
      <app-preview-card
        class="column"
        v-for="(item, idx) in packages"
        :key="idx"
        :item="item"
        :app-preview-settings="appPreviewSettings"
        @viewMoreClick="onViewPackageClicked"
      ></app-preview-card>
    </template>
    <b-carousel-list
      v-else
      class="package-detail-carousel"
      v-model="itemIndex"
      :data="packages"
      :items-to-show="$isMobile() ? 2 : 4"
      :arrow-hover="false"
      icon-size="is-medium"
    >
      <template
        slot="item"
        slot-scope="list"
      >
        <div>
          <app-preview-card
            :item="list"
            :app-preview-settings="appPreviewSettings"
            @viewMoreClick="onViewPackageClicked"
          ></app-preview-card>
        </div>
      </template>
    </b-carousel-list>
  </section>
</template>

<script>
export default {
  name: "SimilarPackages",
  components: {},
  props: {
    itineraryId: {
      type: String,
      default: "",
    },
    packageKey: {
      type: String,
      default: "",
    },
  },

  data() {
    return {
      userInputValue: 5,
      packages: [],
      tourPackages: [],
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
      itemIndex: 0,
    };
  },
  created() {
    this.getPackages();
  },
  methods: {
    onViewPackageClicked(value) {
      if (!value.id) return;
      this.$emit("similarPackageRouteChange", value);
    },

    getPackages() {
      this.$http
        .get(`${process.env.BASE_URL}Data/tour-packages.json`)
        .then((res) => {
          res.data.packages.map((response) => {
            if (response.key === this.packageKey) {
              this.packages = response.items.filter(
                (item) => item.id !== this.itineraryId
              );
              this.packages = this.$randomElements(this.packages, 5);
            }
          });
        });
    },
  },
};
</script>

<style lang="scss">
.similarpackage-section {
  padding: 0 0.5rem !important;
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
@media only screen and (min-width: 360px) and (max-width: 640px) {
  .similarpackage-section {
    box-shadow: none;
    padding: 0 !important;
    .package-detail-carousel {
      box-shadow: none;
      /deep/.carousel-slide {
        padding: 0 .5rem;
      }
      .carousel-arrow .icon.has-icons-left {
        left: 0;
      }
      .carousel-arrow .icon.has-icons-right {
        right: 0;
      }
    }
  }
}
</style>
