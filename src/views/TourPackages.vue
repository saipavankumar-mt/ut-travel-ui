<template>
  <div class="tour-package">
    <hero-banner :banner-overview="bannerInfo"></hero-banner>
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
                @openCardModal="openCardModal"
                :item="item"
                :app-preview-settings="appPreviewSettings"
              ></app-preview-card>
              <router-view></router-view>
            </div>
          </b-tab-item>
        </b-tabs>
      </section>
    </div>
    <div class="divider"></div>
    <div class="tour-package-info">
      <div class="package-title">
        <h2>Why Uttaranchal Holidays?</h2>
      </div>
      <div>
        <p>
          When asked the idea of a 'perfect holiday location, people often use
          phrases lush green landscapes, snow-capped peaks'; 'some thrilling
          adventure sports, such as white water rafting, cliff jumping, trekking
          on suitable terrains' or wildlife safari' etc. Some others might want
          to go for smoother but adventurous activities like 'boating in a lake'
          whereas a few others might find peace in the simple sight of a "valley
          full of flowers
        </p>
        <p>
          Be it any, all of the above mentioned holiday thoughts, Uttaranchal
          'fits the bill in every sense owing to the interesting mix of
          adventure and peace it offers.
        </p>
        <p>
          Besides the already stated activities, further additions to the list
          include paragliding/ice skhug boating', camping, trekking for which
          plausible places are Roopkund, Homekund. Pindari Glacier, Milam
          Glacier, Sunderdunga Glacier, Kafni Glacier, Dayara Bugyal, Bedni
          Bugyal, Hemkund Saheb, Dodital, Har Ki Dun, Sahashratal, Sarutal,
          Deoriatal)
        </p>
        <p>
          Among the spots you can choose from, to create your own holiday bucket
          list are Mussoorie Queen of the hills, Nainital - The Lake Country,
          Mukteshwar - The Apple Country, Ranikhet - The Queen's Meadow,
          Dhanaulti - An Enviable Hideaway, Kausani - The Switzerland of India.
        </p>
        <p>
          You a also have the options of visiting world famous national parks
          like Jim Corbett National Park, Rajaji National Park, Valley of
          Flowers National Park, Nanda Devi National Park, Govind National Park.
        </p>
        <p>
          Breaking its 'sporty' image, Uttaranchal also provides people
          opportunities of being nearer to God' as one can pay religious visits'
          to four haly spots' of Uttaranchal, better known as 'Chardham'
          (Gangotri, Yamunotri, Kedarnath, Badrinath). Taking holy bath in Ganga
          at Haridwar, Rishikesh is the ultimate desire of every pilgrim.
        </p>
        <p>
          Some other possible spots comprise Kedarnath', 'Jyotirling' and Devi
          Temples (like Surkanda Devi, Kunjapur Devi, Chandrabadni Devi, Dhari
          Maa, Purna Giri, Duna Giri). These places hold immense importance for
          religious people.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AppPreviewCard from "../components/ui-components/AppPreviewCard";
import HeroBanner from "../components/ui-components/HeroBanner.vue";
import BookingFormVue from "./BookingForm.vue";
export default {
  name: "TourPackages",
  components: {
    AppPreviewCard,
    HeroBanner,
  },
  data() {
    return {
      tourPackages: [],
      bannerInfo: {},
      tourPackagesHeader: [
        {
          type: "PILIGRIM YATRAS",
          key: "DEVOTIONAL",
          data: [],
        },
        {
          type: "LEISURE PACKAGES",
          key: "BEAUTIFUL",
          data: [],
        },
        {
          type: "ADVENTURES PACKAGES",
          key: "ADVENTURE",
          data: [],
        },
      ],
      appPreviewSettings: {
        showHover: false,
        cardContent: "card-setting",
        cardImage: {
          imageSize: "is-5by3",
        },
        showViewMore: true,
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
    getBannerInfo(res) {
      this.bannerInfo.overview = res.overview;
      this.bannerInfo.title = res.title;
      this.bannerInfo.subtitle = res.subtitle;
    },
    openCardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: BookingFormVue,
        hasModalCard: true,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
      });
    },

    redirect: function (value) {
      this.$router.push({
        name: "detail",
        params: { packageName: value.key, packageId: value.id },
      });
    },
    getTourPackages() {
      this.$http
        .get(`${process.env.BASE_URL}data/tour-packages.json`)
        .then((res) => {
          this.getBannerInfo(res.data);
          console.log("inside", this.bannerInfo);
          res.data.data.map((res) => {
            if (res.key === "piligrimDestination") {
              this.tourPackages.piligrimDestination = res.items;
            }
            if (res.key === "beautifulUttranchal") {
              this.tourPackages.beautifulUttranchal = res.items;
            }
            if (res.key === "adventurePackages") {
              this.tourPackages.adventurePackages = res.items;
            }
          });

          this.tourPackagesHeader.map((response) => {
            if (response.key === "DEVOTIONAL") {
              response.data = this.tourPackages.piligrimDestination;
            }
            if (response.key === "BEAUTIFUL") {
              response.data = this.tourPackages.beautifulUttranchal;
            }
            if (response.key === "ADVENTURE") {
              response.data = this.tourPackages.adventurePackages;
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
  .tour-package-info {
    text-align: left;
    padding-bottom: 10px;
    padding: 0 24px;

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
