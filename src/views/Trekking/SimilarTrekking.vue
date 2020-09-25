<template>
  <section class="similar-trekking-section">
    <div class="similar-trekking-title">
      <h2>
        <span>SIMILAR TREKKING</span>
      </h2>
    </div>
    <b-carousel-list
      class="trekking-carousel"
      v-model="itemIndex"
      :data="packages"
      :items-to-show="$isMobile() ? 1 : 4"
      :arrow-hover="false"
      icon-prev="arrow-left"
      icon-next="arrow-right"
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
  name: 'SimilarTrekking',
  components: {},
  props: {
    itineraryId: String,
  },
  data() {
    return {
      packages: [],
      itemIndex: 0,
      appPreviewSettings: {
        showHover: false,
        cardContent: 'card-setting',
        cardImage: {
          imageSize: 'is-5by3',
        },
        imageBlurOnHover: true,
        hoverAction: {
          text: 'View Trekking',
          type: 'BUTTON',
        },
      },
    };
  },
  created() {
    this.getTrekking();
  },
  methods: {
    getTrekking() {
      this.$http
        .get(`${process.env.BASE_URL}Data/tour-trekking.json`)
        .then((res) => {
          this.packages = res.data.items.filter(
            (item) => item.id !== this.itineraryId
          );
          this.packages = this.$randomElements(this.packages, 5);
        });
    },
    onViewPackageClicked(value) {
      this.$emit('similarPackageRouteChange', value);
    },
  },
};
</script>

<style lang="scss">
.trekking-carousel {
  box-shadow: none !important;
  max-width: 100% !important;
  padding: 1rem 0 2rem 0;
}
.similar-trekking-title {
  h2 {
    text-transform: capitalize;
    font: 20px/30px 'open_sansbold';
    span {
      color: #4a5258;
    }
  }
}
</style>
