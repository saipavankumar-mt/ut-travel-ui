<template>
  <div class="available-packages" @click="redirect()">
    <div class="available-packages-container">
      <!-- <div :class="{ 'image is-2by1': $isMobile() }"> -->
      <div class="package-title has-text-left">
        <span class="no-of-packages">{{ availablePackagesInfo.title }}</span>
        &nbsp;
        <div class="packages-count">
          <span
            v-if="!['REVIEWS', 'HOTELS'].includes(availablePackagesInfo.key)"
          >{{ availablePackagesInfo.noOfPackages }} Packages</span>
          <span v-else>{{ availablePackagesInfo.noOfPackages }}</span>
        </div>
        <!-- <div>
          <img v-bind:src="require('../../assets/images/' + availablePackagesInfo.image)" alt />
        </div>-->
      </div>
      <div class="icon-container">

        <img class="icon-image" v-bind:src="require('../../assets/svg/' + availablePackagesInfo.image)" alt />
      </div>

      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvailablePackages',
  components: {},
  data() {
    return {
      pathMapping: {
        PILIGRIM: {
          path: '/tour-packages',
          activeTab: 0,
        },
        LIESURE: {
          path: '/tour-packages',
          activeTab: 1,
        },
        DESTINATIONS: {
          path: '/destinations',
          activeTab: 0,
        },
        HOTELS: {
          path: '',
          activeTab: 1,
        },
        REVIEWS: {
          path: '',
          activeTab: 0,
        },
      },
    };
  },

  props: {
    availablePackagesInfo: Object,
  },
  methods: {
    redirect() {
      this.$router.push({
        path: this.pathMapping[this.availablePackagesInfo.key].path,
        name: this.pathMapping[this.availablePackagesInfo.key].path.replace(
          /^\//,
          ''
        ),
        params: {
          currentTabIndex: this.pathMapping[this.availablePackagesInfo.key]
            .activeTab,
          scroll: true,
        },
      });
    },
  },
  created: function () {},
};
</script>

<style lang="scss">
.available-packages {
  background: white;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 2px;
    transform: scale(1.07);
    // background: rgb(96, 191, 243);
    // span {
    //   color: white !important;
    // }
  }
  .available-packages-tile {
    width: 100%;
    margin: 10px;
    background: white;
  }

  .available-packages-container {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
    padding: 10px;

    .package-title {
      font-weight: 700;
      .no-of-packages {
        // font-size: 16px;
        color: rgb(62, 63, 84);
        font: 17px/21px 'Roboto Condensed', sans-serif;
        font-weight: bold;
      }
      .packages-count {
        font: 12px/18px "Lato", sans-serif;
        font-weight: 600;
        // font: 15px/18px 'Roboto Condensed', sans-serif;
        color: rgb(145, 143, 155);
      }
      .plus-sign {
        font-size: 12px;
      }
    }

    .icon-image {
      height: 30px;
      width: 60px;
    }
  }

  img {
    width: 100%;
    height: 150px;
    padding: 2px 10px;
  }

  .name {
    position: absolute;
    top: 0;
    border-radius: 4px;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7)
    );
    font-size: 20px;
    color: #fff;
    padding: 8px;
    width: 100%;
    height: 100%;
    line-height: 1.2em;
  }
}
@media only screen and (min-width: 360px) and (max-width: 640px) {
  .available-packages {
    border: 1px solid rgba(145, 143, 155, 0.25);
    .package-title {
      .no-of-packages {
        font-size: 14px !important;
      }
    }
    .name {
      padding: 70px;
    }

    img {
      height: 170px;
    }
  }
}
</style>
