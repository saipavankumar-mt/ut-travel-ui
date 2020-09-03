<template>
  <div class="tour-package">
    <div class="banner">
      <div class="intro">
        <h1>
          <span>Uttranchal Tour</span> Packages
        </h1>
        <!-- <p>
          The onrush of nature’s beauty; the charm of those endearing languages;
          the aroma of the simple food; and the tranquility in sacred temples,
          Uttarakhand is certainly a destination that can satiate wanderlust.
          Wish to make your experience of Uttarakhand holiday an exceptional one?
          Well, in us, you have the solution. With more than a decade experience in designing tour packages
          for people around the world, Tour My India knows what it takes to make any vacation across the country
          stand out. So, when it comes to one of our favourite tourist destinations in Indian Himalayas region
          i.e., Uttarakhand, we deserve all your trust with crafting holiday packages that shall not only
          cater to your travel interests but can give you a new experience all together.
        </p>-->

        <h5>Best Time to Visit Uttarakhand:</h5>
        <p>Uttarakhand is a destination to be visited all through the year as each season has something special to offer.</p>
        <h5>Why Visit Uttarakhand?:</h5>
        <p>For Hindu and Sikh pilgrimage journeys, skiing experience, wildlife tours, whitewater river rafting, yoga, honeymoon, enthralling trekking and peak climbing ventures, birdwatching, rural tourism, culture and heritage, photography tour and for organizing memorable destination weddings.</p>
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

      <img class="banner-inner" src="../assets/images/india-tour-banner.png" alt="kashmir-banner" />
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
              <app-preview-card :item="item" :app-preview-settings="appPreviewSettings"></app-preview-card>
            </div>
          </b-tab-item>
        </b-tabs>
      </section>
    </div>
    <div class="divider"></div>
    <div class="tour-package-info">
      <div class="package-title">
        <h2>Why Uttarancal?</h2>
      </div>
      <div>
        <p>When asked the idea of a 'perfect holiday location, people often use phrases lush green landscapes, snow-capped peaks'; 'some thrilling adventure sports, such as white water rafting, cliff jumping, trekking on suitable terrains' or wildlife safari' etc. Some others might want to go for smoother but adventurous activities like 'boating in a lake' whereas a few others might find peace in the simple sight of a "valley full of flowers</p>
        <p>Be it any, all of the above mentioned holiday thoughts, Uttaranchal 'fits the bill in every sense owing to the interesting mix of adventure and peace it offers.</p>
        <p>Besides the already stated activities, further additions to the list include paragliding/ice skhug boating', camping, trekking for which plausible places are Roopkund, Homekund. Pindari Glacier, Milam Glacier, Sunderdunga Glacier, Kafni Glacier, Dayara Bugyal, Bedni Bugyal, Hemkund Saheb, Dodital, Har Ki Dun, Sahashratal, Sarutal, Deoriatal)</p>
        <p>Among the spots you can choose from, to create your own holiday bucket list are Mussoorie Queen of the hills, Nainital - The Lake Country, Mukteshwar - The Apple Country, Ranikhet - The Queen's Meadow, Dhanaulti - An Enviable Hideaway, Kausani - The Switzerland of India.</p>
        <p>You a also have the options of visiting world famous national parks like Jim Corbett National Park, Rajaji National Park, Valley of Flowers National Park, Nanda Devi National Park, Govind National Park.</p>
        <p>Breaking its 'sporty' image, Uttaranchal also provides people opportunities of being nearer to God' as one can pay religious visits' to four haly spots' of Uttaranchal, better known as 'Chardham' (Gangotri, Yamunotri, Kedarnath, Badrinath). Taking holy bath in Ganga at Haridwar, Rishikesh is the ultimate desire of every pilgrim.</p>
        <p>Some other possible spots comprise Kedarnath', 'Jyotirling' and Devi Temples (like Surkanda Devi, Kunjapur Devi, Chandrabadni Devi, Dhari Maa, Purna Giri, Duna Giri). These places hold immense importance for religious people.</p>
      </div>
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
          imageSize: "is-5by3",
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

.tour-package {
  padding: 0 40px;

  .banner {
    display: flex;

    .intro {
      width: 640px;
      text-align: left;
      // padding-left: 40px;
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
        color: #e70808;
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
