<template>
  <div class="tour-package">
    <div class="banner">
      <div class="intro">
        <h1>
          <span>Uttranchal Tour</span> Packages
        </h1>
        <h5>Best Time to Visit Uttarakhand:</h5>
        <p>
          Uttarakhand is a destination to be visited all through the year as
          each season has something special to offer.
        </p>
        <h5>Why Visit Uttarakhand?:</h5>
        <p>
          For Hindu and Sikh pilgrimage journeys, skiing experience, wildlife
          tours, whitewater river rafting, yoga, honeymoon, enthralling trekking
          and peak climbing ventures, birdwatching, rural tourism, culture and
          heritage, photography tour and for organizing memorable destination
          weddings.
        </p>
        <h5>Temperature</h5>
        <ul>
          <li>
            <h4>17°C to 35°C</h4>
            <p>
              Summer
              <br />(April to Mid-June)
            </p>
          </li>
          <li>
            <h4>15°C to 30°C</h4>
            <p>
              Monsoon
              <br />(Mid-June to September)
            </p>
          </li>
          <li>
            <h4>12°C to 0°C</h4>
            <p>
              Winter
              <br />(October to March)
            </p>
          </li>
        </ul>
      </div>

      <img
        class="banner-inner"
        src="../../assets/images/tour-package-banner.png"
        alt="kashmir-banner"
      />
    </div>
    <div class="package-container" id="scroll">
      <section>
        <b-tabs v-model="activeTab">
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
import AppPreviewCard from "../../components/ui-components/AppPreviewCard";
import BookingFormVue from "../BookingForm.vue";
export default {
  name: "TourPackages",
  components: {
    AppPreviewCard,
    // BookingFormVue,
  },
  props: {
    currentTabIndex: {
      type: Number,
      default: 0,
    },
    scroll: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isTabIndexSet: false,
      tourPackages: [],
      activeTab: this.currentTabIndex,
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
        hoverAction: {
          show: true,
          text: "View Package",
          type: "BUTTON",
        },
        imageBlurOnHover: true,
      },
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.getTourPackages();
    console.log("in created");
  },
  mounted() {
    if (this.scroll) {
      this.onIndexChange();
    }
  },
  methods: {
    onIndexChange() {
      var element = document.getElementById("scroll");
      var headerOffset = 80;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    },
    onViewMoreClicked(value) {
      this.redirect(value);
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
        .get(`${process.env.BASE_URL}Data/tour-packages.json`)
        .then((res) => {
          // this.tourPackages = res.data;
          res.data.packages.map((res) => {
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
@media only screen and (min-width: 360px) and (max-width: 640px) {
  .tour-package {
    .banner {
      flex-direction: column-reverse;

      h1 {
        font-size: 36px;
        line-height: 46px;
        padding-top: 10px;
      }
      .intro {
        width: 100% !important;
        padding: 16px;
        padding-left: 1rem;
      }
      .banner-inner {
        width: 100% !important;
      }
    }
  }
}
</style>
