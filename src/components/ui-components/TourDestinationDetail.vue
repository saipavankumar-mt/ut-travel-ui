<template>
  <div class="package-destination-detail">
    <div class="banner">
      <div class="intro">
        <h1>
          <span>Uttranchal</span> Destinations
        </h1>
      </div>

      <img
        class="banner-inner"
        src="../../assets/images/tour-package-banner.png"
        alt="kashmir-banner"
      />
    </div>
    <p>TOP ATTRACTION IN NAINITAL</p>
    <b-carousel-list
      class="destination-carousel container"
      v-model="index"
      :data="destinationPackages.attractions"
      :items-to-show="4"
      :arrow-hover="false"
      icon-prev="arrow-left"
      icon-next="arrow-right"
      icon-size="is-medium"
    >
      <template slot="item" slot-scope="list">
        <div>
          <app-preview-card :item="list" :app-preview-settings="appPreviewSettings"></app-preview-card>
        </div>
      </template>
    </b-carousel-list>
    <p>HOTELS</p>
    <b-carousel-list
      class="destination-carousel container"
      v-model="itemIndex"
      :data="destinationPackages.hotels"
      :items-to-show="4"
      :arrow-hover="false"
      icon-prev="arrow-left"
      icon-next="arrow-right"
      icon-size="is-medium"
    >
      <template slot="item" slot-scope="list">
        <div>
          <app-preview-card :item="list" :app-preview-settings="appPreviewSettings"></app-preview-card>
        </div>
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
export default {
  name: "TourDestinationDetail",
  components: {},
  props: ["destinationId"],
  data() {
    return {
      destinationPackages: [],
      appPreviewSettings: {
        showHover: false,
        cardContent: "card-setting",
        cardImage: {
          imageSize: "is-5by3",
        },
        imageBlurOnHover: true,
        hoverAction: {
          text: "",
          type: "TEXT",
        },
      },
      itemIndex: 0,
      index: 0,
    };
  },
  methods: {
    getDestinationPackages() {
      this.$http
        .get(
          `${process.env.BASE_URL}Data/DestinationDetails/${this.destinationId}.json`
        )
        .then((res) => {
          this.destinationPackages = res.data.data;
          console.log(this.destinationPackages);
        });
    },
  },
  created: function () {
    this.getDestinationPackages();
  },
};
</script>

<style lang="scss">
.package-destination-detail {
  .destination-carousel {
    box-shadow: none !important;
    margin: 0 2rem !important;
    max-width: 100% !important;
    padding: 2rem 0 0;
    /deep/.carousel-slide {
      padding: 14px;
    }
  }
  .banner {
    display: flex;
    padding-bottom: 36px;
    justify-content: space-between;
    .intro {
      width: 50%;
      text-align: left;
      padding-left: 2rem;
    }

    h1 {
      color: #3b404b;
      font-family: SFProDisplay-Bold;
      font-size: 50px;
      line-height: 60px;
      padding-top: 40px;
      text-transform: capitalize;
      padding-bottom: 16px;

      span {
        color: rgb(96, 191, 243);
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      width: 100%;
      padding: 8px 0 0 0;
      margin: 0;
      justify-content: space-between;
      li {
        h4 {
          font: 20px/30px "open_sansbold";
          color: #4a5258;
          font-weight: 700;
        }
      }
    }

    p {
      font: 16px/26px "open_sansregular";
      text-align: justify;
      color: #4a5258;
      padding-bottom: 21px;

      span {
        font-family: "OpenSans-Semibold";
      }
    }

    h5 {
      font: 16px "open_sansbold";
      color: #394048;
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1.2;
    }
  }

  .tour-package-info {
    text-align: left;
    padding-bottom: 10px;

    .package-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2 {
        font: 25px/32px "clanotmedium";
        color: #394048;
        text-align: center;
        font-weight: 700;
        margin: 25px 0;
      }
    }
    p {
      color: #585c66;
      font-size: 18px;
      font-family: "SFProDisplay-Regular";
      line-height: 23px;
      padding-bottom: 16px;
    }
  }

  .divider {
    height: 1px;
    background: #bfa4a4;
    margin-top: 24px;
    width: 100%;
  }
}
</style>
