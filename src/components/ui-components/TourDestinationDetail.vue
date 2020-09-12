<template>
  <div class="package-destination-detail">
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
    <p>TOP ATTRACTION IN NAINITAL</p>
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
    <p>HOTELS</p>
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
    <section class="side-header">
      <!-- <b-field grouped group-multiline> -->
      <!-- <div class="control">
          <b-switch v-model="atRight">Right position</b-switch>
      </div>-->
      <!-- <div class="control">
          <b-switch v-model="expanded">Expanded</b-switch>
      </div>-->
      <!-- <b-field label="Size" label-position="on-border">
          <b-select v-model="size" placeholder="Size">
            <option :value="null">Default</option>
            <option value="is-small">Small</option>
            <option value="is-medium">Medium</option>
            <option value="is-large">Large</option>
          </b-select>
      </b-field>-->
      <!-- <b-field label="Type" label-position="on-border">
          <b-select v-model="type" placeholder="Type">
            <option :value="null">Default</option>
            <option value="is-boxed">Boxed</option>
            <option value="is-toggle">Toggle</option>
          </b-select>
      </b-field>-->
      <!-- </b-field> -->

      <b-tabs
        :position="atRight ? 'is-right' : ''"
        :size="size"
        vertical
        :expanded="expanded"
        :type="type"
      >
        <b-tab-item label="Transit">
          <template class="imp-subtitle" v-for="(item, index) in destinationPackages.transit">
            <div :key="index">
              <div>
                <i class="fas fa-angle-double-right"></i>
                {{ item.title }}
              </div>
              <div>{{item.subtitle}}</div>
            </div>
          </template>
        </b-tab-item>

        <b-tab-item label="Gallery"></b-tab-item>

        <b-tab-item label="Map"></b-tab-item>
      </b-tabs>
    </section>
  </div>
</template>

<script>
export default {
  name: "TourDestinationDetail",
  components: {},
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
      itemIndex: 0,
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
        });
    },
  },
  created: function () {
    this.getDestinationPackages();
  },
};
</script>

<style lang="scss">
.side-header {
  padding: 20px 50px;
  .tab-content {
    width: min-content;

    .tab-item {
      text-align: left;
    }
  }
}
.package-destination-detail {
  .destination-carousel {
    box-shadow: none !important;
    margin: 0 2rem !important;
    max-width: 100% !important;
    padding: 2rem 0 0;
    /deep/.carousel-slide {
      padding: 14px;
    }
  }
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
</style>
