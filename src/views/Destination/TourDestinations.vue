<template>
  <div class="tour-package">
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
    <div class="package-container">
      <section>
        <b-tabs>
          <b-tab-item
            v-for="(item, idx) in tourPackagesHeader"
            :key="idx"
            class="columns is-multiline"
            :label="item.type"
            size="is-medium"
          >
            <div class="column is-one-quarter" v-for="(item, idx) in item.data" :key="idx">
              <app-preview-card
                @viewMoreClick="onViewMoreClicked"
                :item="item"
                :app-preview-settings="appPreviewSettings"
              ></app-preview-card>
              <router-view></router-view>
            </div>
          </b-tab-item>
        </b-tabs>
      </section>
    </div>
  </div>
</template>

<script>
// import OfferList from './OfferList.vue';
import AppPreviewCard from "../../components/ui-components/AppPreviewCard";
export default {
  name: "TourDestinations",
  components: {
    // OfferList,
    AppPreviewCard,
  },
  data() {
    return {
      tourPackages: [],
      tourPackagesHeader: [
        {
          type: "HILL STATION",
          key: "HILL",
          data: [],
        },
        {
          type: "LEISURE PACKAGES",
          key: "TREKKING",
          data: [],
        },
      ],
      appPreviewSettings: {
        showHover: false,
        cardContent: "card-setting",
        cardImage: {
          imageSize: "is-5by3",
        },
        hoverAction: {
          show: true,
          text: "View Destination",
          type: "BUTTON",
        },
        imageBlurOnHover: true,
      },
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.getTourPackages();
  },
  methods: {
    onViewMoreClicked(value) {
      this.redirect(value);
    },

    redirect: function (value) {
      this.$router.push({
        name: "destination-detail",
        params: { destinationName: value.key, destinationId: value.id },
      });
    },
    getTourPackages() {
      this.$http
        .get(`${process.env.BASE_URL}data/tour-destinations.json`)
        .then((res) => {
          console.log(this.tourPackages);
          res.data.destinations.map((res) => {
            if (res.key === "hillStationGetaways") {
              this.tourPackages.hillStationGetaways = res.items;
            }
            if (res.key === "trekkingPackages") {
              this.tourPackages.trekkingPackages = res.items;
            }
          });

          this.tourPackagesHeader.map((response) => {
            if (response.key === "HILL") {
              response.data = this.tourPackages.hillStationGetaways;
            }
            if (response.key === "TREKKING") {
              response.data = this.tourPackages.trekkingPackages;
            }
          });
        });
    },
  },
};
</script>

<style lang="scss">
.package-column {
  // margin: 8px;
  padding: unset !important;
}

.tour-package {
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

@media only screen and (max-width: 1366px) {
  .banner-inner {
    width: auto;
    right: 0px;
  }
}
</style>
