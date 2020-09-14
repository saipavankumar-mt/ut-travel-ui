<template>
  <div class="package-destination-detail">
    <div class="banner">
      <div class="intro">
        <div class="title">
          <h1>
            <span>{{destinationPackages.title}}</span>
          </h1>
          <p class="destination-subtitle">{{destinationPackages.qoute}}</p>
        </div>

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

          <img :src="destinationPackages.heroImage" alt="destinationPackages.heroImage" />
        </div>
        <h5>TEMPERATURE</h5>
        <div class="temperature">
          <div v-for="(item, i) in destinationPackages.temperature" :key="i">
            <div>
              <div class="temp">{{item.temp}}</div>
              <div class="month">{{item.months }}</div>
              <div class="season">{{item.season}}</div>
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

    <b-carousel-list
      v-if="checkIfIncludedPackgesAvailabe()"
      class="destination-carousel container"
      v-model="packageIndex"
      :data="destinationPackages.includedPackages"
      :items-to-show="4"
      :arrow-hover="false"
      icon-prev="arrow-left"
      icon-next="arrow-right"
      icon-size="is-medium"
    >
      <h5>Included Packages</h5>
      <template slot="item" slot-scope="list">
        <div>
          <app-preview-card
            :item="list"
            @viewMoreClick="onViewMoreClicked"
            :app-preview-settings="includedPackageSettings"
          ></app-preview-card>
        </div>
      </template>
    </b-carousel-list>
    <div class="itinerary-container">
      <section>
        <b-tabs>
          <b-tab-item label="TRANSIT">
            <template v-for="(item, index) in destinationPackages.transit">
              <div :key="index">
                <div class="transit-title">
                  <!-- <i class="fas fa-angle-double-right"></i> -->
                  <i v-if="item.title==='BY AIR'" class="fas fa-train"></i>
                  <i v-if="item.title==='BY RAIL'" class="fas fa-plane"></i>
                  <i v-if="item.title==='BY ROAD'" class="fas fa-road"></i>
                  {{ item.title }}
                </div>
                <div class="transit-subtitle">{{item.subtitle}}</div>
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
      includedPackageSettings: {
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
      packageIndex: 0,
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
          this.destinationPackages.heroImage = require("../../assets/images/" +
            this.destinationPackages.heroImage);
        });
    },
    onViewMoreClicked(value) {
      this.redirect(value);
    },

    redirect: function (value) {
      this.$router.push({
        name: "detail",
        params: { packageName: value.key, packageId: value.id },
      });
    },
    checkIfIncludedPackgesAvailabe() {
      return this.destinationPackages.includedPackages > 0;
    },
  },
  created: function () {
    window.scrollTo(0, 0);
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
    padding: 1rem 0 2rem 0;
    /deep/.carousel-slide {
      padding: 14px;
    }
  }
  .banner {
    display: flex;
    padding-bottom: 20px;
    justify-content: space-between;
    .intro {
      width: 50%;
      text-align: left;
      padding-left: 2rem;
      .title {
        width: fit-content;
      }
    }

    .destination-subtitle {
      text-align: right;
      padding-bottom: 0px;
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

  .banner-inner {
    img {
      height: 350px !important;
      padding-bottom: unset;
      border-bottom-left-radius: unset !important;
    }
  }

  .temperature {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-right: 20px;
    text-align: left;
    .temp {
      font: 20px/30px "open_sansbold";
      color: #4a5258;
      font-weight: 700;
    }
    .month {
      font: 15px/20px "open_sansbold";
      color: #4a5258;
      font-weight: 200;
    }
    .season {
      font: 15px/20px "open_sansbold";
      color: #4a5258;
      font-weight: 200;
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

  .itinerary-container {
    .transit-title {
      font-family: "Mogra";
      color: #4a5258;
      text-transform: uppercase;
    }
    .transit-subtitle {
      font-family: "Roboto", sans-serif;
      color: #4a5258;
      padding-bottom: 5px;
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
