<template>
  <div class="package-destination-detail">
    <div class="banner">
      <div class="intro">
        <h1>
          <span>{{destinationPackages.title}}</span>
        </h1>
        <p class="destination-subtitle">{{destinationPackages.qoute}}</p>
        <p>{{destinationPackages.subtitle}}</p>
        <div v-for="(item, i) in destinationPackages.overview" :key="i">
          <div>
            <h5>{{item.title}}</h5>
            <p>{{item.subtitle}}</p>
          </div>
        </div>
      </div>

      <!-- <img
        class="banner-inner"
        src="../../assets/images/tour-package-banner.png"
        alt="kashmir-banner"
      />-->
      <div class="banner-inner">
        <div>
          <!-- <img :src="destinationPackages.heroImage" alt="destinationPackages.heroImage" /> -->
          <img
            class="banner-inner"
            src="../../assets/images/tour-package-banner.png"
            alt="kashmir-banner"
          />
        </div>
        <h5>TEMPERATURE</h5>
        <div class="temperature">
          <div v-for="(item, i) in destinationPackages.temperature" :key="i">
            <div>
              <div>{{item.months }}</div>
              <div>{{item.season}}</div>
              <div>{{item.temp}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h5>TOP ATTRACTION IN NAINITAL</h5>
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
    <h5>HOTELS</h5>
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
    <!-- <section class="side-header">
      <b-tabs
        :position="atRight ? 'is-right' : ''"
        :size="size"
        vertical
        :expanded="expanded"
        :type="type"
      >
        <b-tab-item label="Transit">
          <template class="imp-subtitle" v-for="(item, index) in destinationPackages.transit">
            <div :key="index">
              <div>
                <i class="fas fa-angle-double-right"></i>
                {{ item.title }}
              </div>
              <div>{{item.subtitle}}</div>
            </div>
          </template>
        </b-tab-item>

        <b-tab-item label="Gallery"></b-tab-item>

        <b-tab-item label="Map"></b-tab-item>
      </b-tabs>
    </section>-->
    <div class="itinerary-container">
      <section>
        <b-tabs>
          <b-tab-item label="TRANSIT">
            <template class="imp-subtitle" v-for="(item, index) in destinationPackages.transit">
              <div :key="index">
                <div>
                  <i class="fas fa-angle-double-right"></i>
                  {{ item.title }}
                </div>
                <div>{{item.subtitle}}</div>
              </div>
            </template>
          </b-tab-item>

          <b-tab-item label="GALLERY"></b-tab-item>

          <b-tab-item label="MAP"></b-tab-item>
        </b-tabs>
      </section>
    </div>
    <div class="similartours">
      <similar-destinations :itineraryId="destinationPackages.id"></similar-destinations>
    </div>
  </div>
</template>

<script>
import SimilarDestinations from "../../views/Destination/SimilarDestinations.vue";
export default {
  name: "TourDestinationDetail",
  components: {
    SimilarDestinations,
  },
  props: ["destinationId"],
  data() {
    return {
      expanded: false,
      atRight: false,
      size: "is-medium",
      type: "is-toggle",
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
.tab-content {
  text-align: left;
}
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

    .destination-subtitle {
      padding-left: 40px;
    }
    h1 {
      color: #3b404b;
      font-family: SFProDisplay-Bold;
      font-size: 50px;
      line-height: 60px;
      padding-top: 40px;
      text-transform: capitalize;
      // padding-bottom: 16px;

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
  }
  h5 {
    font: 16px "open_sansbold";
    color: #394048;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.2;
  }

  .temperature {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
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
