<template>
  <div class="banner">
    <div class="intro">
      <h1>
        <span>{{ bannerOverview.title }}</span> Packages
      </h1>
      <p>{{bannerOverview.subtitle}}</p>
      <div v-for="(item, i) in bannerOverview.overview" :key="i">
        <h5>{{item.title}}</h5>
        <p>{{item.subtitle}}</p>
      </div>
      <h5>Temperature</h5>
      <ul>
        <li>
          <h4>28°C to 45°C</h4>
          <p>
            Summer
            <br />(April to Mid-June)
          </p>
        </li>
        <li>
          <h4>24°C to 32°C</h4>
          <p>
            Monsoon
            <br />(July to September)
          </p>
        </li>
        <li>
          <h4>5°C to 27°C</h4>
          <p>
            Winter
            <br />(October to March)
          </p>
        </li>
      </ul>
      <b-button class="is-blue" @click="cardModal()">Book Now</b-button>
    </div>

    <!-- <img
      class="banner-inner"
      src="../../assets/images/tour-package-banner.png"
      alt="kashmir-banner"
    />-->
  </div>
</template>

<script>
export default {
  name: "HeroBanner",
  components: {},
  props: {
    bannerOverview: { type: Object, required: true },
  },
  created() {
    console.log("in banner", this.bannerOverview);
  },
};
</script>

<style lang="scss">
.banner-container {
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
}
</style>
