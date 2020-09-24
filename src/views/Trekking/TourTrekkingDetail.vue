<template>
  <div class="tour-trekking-detail">
    <div class="banner">
      <div class="intro">
        <div class="title">
          <h1>
            <span>{{ trekkingPackages.title }}</span>
          </h1>
          <p class="destination-subtitle">{{ trekkingPackages.qoute }}</p>
        </div>

        <p>{{ trekkingPackages.subtitle }}</p>
        <div v-for="(item, i) in trekkingPackages.description" :key="i">
          <div>
            <h5>{{ item.title }}</h5>
            <p>{{ item.subtitle }}</p>
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
          <!-- <img :src="trekkingPackages.heroImage" alt="trekkingPackages.heroImage" /> -->

          <img
            :src="trekkingPackages.heroImage"
            alt="trekkingPackages.heroImage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TourTrekkingDetail",
  components: {},
  data() {
    return {
      trekkingPackages: {},
      items: [],
    };
  },
  props: ["trekkingId"],
  created() {
    this.getTrekkingPPackages();
  },
  methods: {
    getTrekkingPPackages() {
      this.$http
        .get(
          `${process.env.BASE_URL}Data/TrekkingDetails/${this.trekkingId}.json`
        )
        .then((res) => {
          this.trekkingPackages = res.data.data;
          // console.log(this.trekkingPackages);
          this.trekkingPackages.heroImage = require("../../assets/images/" +
            this.trekkingPackages.heroImage);
          for (let i = 0; i < this.trekkingPackages.images.length; i++) {
            this.items.push({
              image: require("../../assets/images/" +
                this.trekkingPackages.images[i]),
            });
          }
        });
    },
  },
};
</script>

<style lang="scss">
.tour-trekking-detail {
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
}
</style>
