<template>
  <div class="tour-destination">
    <div class="banner">
      <div class="intro">
        <h1>
          <span>Uttranchal</span>
          {{tourDestinations.title}}
        </h1>
        <div
          v-for="(item, i) in tourDestinations.overview"
          :key="i"
        >
          <div>
            <h5>{{ item.title }}</h5>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
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
        src="../../assets/images/tour-destination-banner.png"
        alt="kashmir-banner"
      />
    </div>
    <div class="divider"></div>
    <div
      class="package-container"
      id="scroll"
    >
      <section
        class="columns is-multiline"
        v-if="tourDestinations && tourDestinations.items"
      >
        <div
          class="column is-one-fifth"
          v-for="(item, idx) in tourDestinations.items"
          :key="idx"
        >
          <app-preview-card
            @viewMoreClick="onViewClicked($event)"
            :item="item"
            :app-preview-settings="appPreviewSettings"
          ></app-preview-card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import AppPreviewCard from '../../components/ui-components/AppPreviewCard';
export default {
  name: 'TourDestinations',
  components: {
    AppPreviewCard,
  },

  // props: {
  //   currentTabIndex: {
  //     type: Number,
  //     default: 0,
  //   },
  //   scroll: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },

  data() {
    return {
      tourDestinations: {},
      // activeIndex: this.currentTabIndex,
      appPreviewSettings: {
        showHover: false,
        cardContent: 'card-setting',
        cardImage: {
          imageSize: 'is-5by3',
        },
        hoverAction: {
          show: true,
          text: 'View Destination',
          type: 'BUTTON',
        },
        imageBlurOnHover: true,
      },
    };
  },
  created() {
    window.scrollTo(0, 0);
    this.getTourDestinations();
  },
  // mounted() {
  //   if (this.scroll) {
  //     this.onIndexChange();
  //   }
  // },
  methods: {
    // onIndexChange() {
    //   var element = document.getElementById('scroll');
    //   var headerOffset = 80;
    //   var elementPosition = element.getBoundingClientRect().top;
    //   var offsetPosition = elementPosition - headerOffset;
    //   window.scrollTo({
    //     top: offsetPosition,
    //     behavior: 'smooth',
    //   });
    // },
    onViewClicked(value, key) {
      this.redirect(value, key);
    },
    redirect: function (value) {
      this.$router.push({
        name: 'destination-detail',
        params: {
          destinationName: value.key,
          destinationId: value.id,
        },
        query: {
          id: value.id
        }
      });
    },
    getTourDestinations() {
      this.$http
        .get(`${process.env.BASE_URL}Data/tour-destinations.json`)
        .then((res) => {
          this.tourDestinations = res.data;
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
.package-container {
  padding: 2rem;
}

.tour-destination {
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
          font: 20px/30px 'open_sansbold' !important;
          color: #4a5258;
          font-weight: 700;
        }
      }
    }

    p {
      font: 16px/26px 'open_sansregular';
      text-align: justify;
      color: #4a5258;
      padding-bottom: 21px;

      span {
        font-family: 'OpenSans-Semibold';
      }
    }

    h5 {
      font: 16px 'open_sansbold';
      color: #394048;
      text-transform: uppercase;
      font-weight: 700;
      line-height: 1.2;
    }
  }

  .tour-destination-info {
    text-align: left;
    padding-bottom: 10px;

    .package-title {
      display: flex;
      flex-direction: column;
      justify-content: center;
      h2 {
        font: 25px/32px 'clanotmedium';
        color: #394048;
        text-align: center;
        font-weight: 700;
        margin: 25px 0;
      }
    }
    p {
      color: #585c66;
      font-size: 18px;
      font-family: 'SFProDisplay-Regular';
      line-height: 23px;
      padding-bottom: 16px;
    }
  }

}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .tour-destination {
    .banner {
      flex-direction: column-reverse;
      padding: 0 1rem;
      p {
        font: 14px/26px 'open_sansregular';
      }
      ul {
        // display: unset;
        li {
          h4 {
            font: 16px/30px 'open_sansbold' !important;
          }
        }
      }
      .intro {
        width: 100%;
        padding-left: 0;
      }
    }
  }
  .banner-inner {
    width: 100% !important;
  }
}

@media only screen and (max-width: 1366px) {
  .banner-inner {
    width: auto;
    right: 0px;
  }
}
</style>
