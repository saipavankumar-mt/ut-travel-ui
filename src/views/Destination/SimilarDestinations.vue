<template>
  <section class="similar-destinations-section">
    <div class="similar-destinations-title">
      <h2>
        <span>SIMILAR DESTINATIONS</span>
      </h2>
    </div>
    <b-carousel-list
      class="destination-carousel container"
      v-model="itemIndex"
      :data="packages"
      :items-to-show="$isMobile() ? 2 : 5"
      :arrow-hover="false"
      icon-prev="arrow-left"
      icon-next="arrow-right"
      icon-size="is-medium"
    >
      <template slot="item" slot-scope="list">
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
  name: "SimilarDestinations",
  components: {},
  props: {
    itineraryId: String,
    packageKey: String,
  },
  data() {
    return {
      packages: [],
      itemIndex: 0,
      appPreviewSettings: {
        showHover: false,
        cardContent: "card-setting",
        cardImage: {
          imageSize: "is-5by3",
        },
        imageBlurOnHover: true,
        hoverAction: {
          text: "View Destination",
          type: "BUTTON",
        },
      },
    };
  },
  created() {
    this.getDestinations();
  },
  methods: {
    getDestinations() {
      this.$http
        .get(`${process.env.BASE_URL}Data/tour-destinations.json`)
        .then((res) => {
          this.packages = res.data.items.filter(
            (item) => item.id !== this.itineraryId
          );
          this.packages = this.$randomElements(this.packages, 5);
        });
    },
    onViewPackageClicked(value) {
      if (!value.id) return;
      this.$emit("similarPackageRouteChange", value);
    },
  },
};
</script>

<style lang="scss">
.similar-destinations-title {
  h2 {
    text-transform: capitalize;
    font: 20px/30px "open_sansbold";
    span {
      color: #4a5258;
    }
  }
}
</style>
