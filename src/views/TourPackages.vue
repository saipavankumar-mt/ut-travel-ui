<template>
  <div class="inner-banner">
    <div class="banner">
      <div class="intro">
        <h1>
          <span>Uttranchal Tour</span> Packages
        </h1>
        <p>
          The onrush of nature’s beauty; the charm of those endearing languages;
          the aroma of the simple food; and the tranquility in sacred temples,
          Uttarakhand is certainly a destination that can satiate wanderlust.
          Wish to make your experience of Uttarakhand holiday an exceptional one?
          Well, in us, you have the solution. With more than a decade experience in designing tour packages
          for people around the world, Tour My India knows what it takes to make any vacation across the country
          stand out. So, when it comes to one of our favourite tourist destinations in Indian Himalayas region
          i.e., Uttarakhand, we deserve all your trust with crafting holiday packages that shall not only
          cater to your travel interests but can give you a new experience all together.
        </p>
      </div>
      <img class="banner-inner" src="../assets/images/india-tour-banner.png" alt="kashmir-banner" />
    </div>
    <div class="itinerary-container">
      <section>
        <b-tabs>
          <b-tab-item
            v-for="(item, idx) in tourPackagesHeader"
            :key="idx"
            class="columns is-multiline"
            :label="item.type"
            size="is-medium"
          >
            <div class="column is-one-fifth" v-for="(item, idx) in item.data" :key="idx">
              <app-preview-card :item="item" :app-preview-settings="appPreviewSettings"></app-preview-card>
            </div>
          </b-tab-item>
        </b-tabs>
      </section>
    </div>
  </div>
</template>

<script>
// import OfferList from './OfferList.vue';
import AppPreviewCard from "../components/ui-components/AppPreviewCard";
export default {
  name: "TourPackages",
  components: {
    // OfferList,
    AppPreviewCard,
  },
  data() {
    return {
      tourPackages: [],
      tourPackagesHeader: [
        {
          type: "DEVOTIONAL YATRAS",
          key: "DEVOTIONAL",
          data: [],
        },
        {
          type: "BEAUTIFUL UTTRANCHAL",
          key: "BEAUTIFUL",
          data: [],
        },
        {
          type: "ADVENTURE PACKAGES",
          key: "ADVENTURE",
          data: [],
        },
      ],
      appPreviewSettings: {
        showHover: false,
        cardContent: "card-setting",
        content: "content-setting",
        cardImage: {
          imageSize: "is-4by5",
        },
      },
    };
  },
  created() {
    this.getTourPackages();
  },
  methods: {
    getTourPackages() {
      console.log("Inside get packages");
      this.$http
        .get(`${process.env.BASE_URL}data/tour-packages.json`)
        .then((res) => {
          this.tourPackages = res.data;
          this.tourPackagesHeader.map((response) => {
            if (response.key === "DEVOTIONAL") {
              response.data = res.data.devotionalYatras;
            }
            if (response.key === "BEAUTIFUL") {
              response.data = res.data.beautifulUttranchal;
            }
            if (response.key === "ADVENTURE") {
              response.data = res.data.adventurePackages;
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

.inner-banner {
  .banner {
    display: flex;

    .intro {
      width: 640px;
      text-align: left;
      padding-left: 40px;
    }

    h1 {
      color: #3b404b;
      font-family: SFProDisplay-Bold;
      font-size: 50px;
      line-height: 60px;
      padding-top: 40px;
      text-transform: capitalize;
      padding-bottom: 25px;

      span {
        color: #ff6612;
      }
    }

    p {
      color: #585c66;
      font-size: 15px;
      font-family: "SFProDisplay-Regular";
      line-height: 23px;
      padding-bottom: 25px;
    }
  }
}

@media only screen and (max-width: 1366px) {
  .banner-inner {
    width: auto;
    right: 0px;
  }
}
</style>
