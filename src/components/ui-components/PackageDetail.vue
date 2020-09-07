<template>
  <div class="travel-detail">
    <!-- <div class="banner">
      <div class="intro">
        <h1>
          <span>{{ posts.title }}</span> Packages
        </h1>
        <p>{{posts.subtitle}}</p>
        <div v-for="(item, i) in posts.overview" :key="i">
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

      <img class="banner-inner" :src="posts.heroImage" alt="chardham-banner" />
    </div>-->
    <hero-banner :banner-overview="bannerInfo"></hero-banner>
    <div class="itinerary-container">
      <section>
        <b-tabs>
          <b-tab-item label="ITINERARY">
            <div>
              <p></p>
            </div>
            <div class="days-container">
              <div v-for="(item, i) in posts['description']" :key="i">
                <div class="columns">
                  <div class="column is-one-quarter" v-if="item.isMileStone">
                    <app-mile-stone :item="item.place"></app-mile-stone>
                  </div>
                  <div class="column is-one-quarter" v-if="!item.isMileStone">
                    <app-mile-stone-art :item="item.place"></app-mile-stone-art>
                  </div>

                  <div class="column">
                    <div class="card-content has-text-left">
                      <div class="day-title">
                        <h4>{{ item.title }}</h4>
                      </div>
                      <div class="content has-text-dark-grey">
                        <div
                          class="day-route"
                          v-for="(title, index) in item.subtitles"
                          :key="index"
                        >
                          <i class="fas fa-angle-double-right"></i>
                          <div class="day-subtitle">
                            <p>{{ title }}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="INCLUSIONS & EXCLUSIONS" icon="library-music">
            <div class="imp-info-container">
              <div
                class="imp-description"
                v-for="(item, i) in posts.inclusionAndExclusion"
                :key="i"
              >
                <span class="imp-title">{{item.title}}:&nbsp;</span>
                <div class="imp-sub-container">
                  <div class="imp-subtitle" v-for="(title, index) in item.subtitles" :key="index">
                    <div class="icon-text">
                      <i class="fas fa-angle-double-right"></i>
                      <p>{{ title }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="ACCOMODATION & PRICE">
            <b-table :bordered="true" :data="posts.accomodationInfo" :columns="accomodationColumns"></b-table>
            <div class="per-person-heading">Per Person Cost for the Package</div>
            <b-table
              :bordered="true"
              :data="posts.perPersonCostInfo"
              :columns="perPersonCostColumns"
            ></b-table>
          </b-tab-item>
          <b-tab-item label="TERMS">
            <div class="imp-info-container">
              <div class="imp-description" v-for="(item, i) in posts['importantInfo']" :key="i">
                <span class="imp-title">{{item.title}}:&nbsp;</span>
                <div class="imp-sub-container">
                  <div class="imp-subtitle" v-for="(title, index) in item.subtitles" :key="index">
                    <i class="fas fa-angle-double-right"></i>
                    {{ title }}
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="GALLERY">
            <div class="image-container">
              <!-- <img class="image" src="../../assets/images/destinations/nainital.webp" alt="destination" /> -->
              <b-carousel
                :autoplay="false"
                with-carousel-list
                :indicator="false"
                :overlay="gallery"
              >
                <b-carousel-item v-for="(item, i) in items" :key="i">
                  <figure class="image">
                    <img class="image-ht" :src="item.image" />
                  </figure>
                </b-carousel-item>
                <span v-if="gallery" class="modal-close is-medium" />
                <template slot="list" slot-scope="props">
                  <b-carousel-list
                    class="carousel-gallery"
                    v-model="props.active"
                    :data="items"
                    v-bind="al"
                    @switch="props.switch($event, false)"
                    as-indicator
                  />
                </template>
              </b-carousel>
            </div>
          </b-tab-item>
          <b-tab-item label="MAP"></b-tab-item>
        </b-tabs>
      </section>
      <div class="similartours">
        <similar-packages :itineraryId="posts.id"></similar-packages>
      </div>
    </div>
  </div>
</template>

<script>
import BookingFormVue from "../../views/BookingForm.vue";
import SimilarPackages from "../../views/SimilarPackages.vue";
import HeroBanner from "./HeroBanner.vue";
export default {
  name: "PackageDetail",
  components: {
    SimilarPackages,
    HeroBanner,
  },
  props: ["packageId"],
  data() {
    return {
      bannerInfo: {},
      accomodationColumns: [],
      perPersonCostColumns: [],
      posts: {},
      errors: [],
      gallery: false,
      al: {
        hasGrayscale: false,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4,
          },
          960: {
            hasGrayscale: false,
            itemsToShow: 6,
          },
        },
      },
      items: [],
    };
  },
  methods: {
    checkIfIndexIsOdd(index) {
      return index % 2;
    },
    cardModal() {
      this.$buefy.modal.open({
        // parent: this,
        component: BookingFormVue,
        hasModalCard: true,
        customClass: "custom-class custom-class-2",
        trapFocus: true,
      });
    },
    getAccomodationInfo() {
      console.log(this.posts.accomodationInfo.length);
      for (let i = 0; i < this.posts.accomodationInfo.length; i++) {
        if (i === 0) {
          let header = {};
          for (const property in this.posts.accomodationInfo[i]) {
            (header = {
              field: property,
              label: property.toUpperCase(),
              centered: true,
            }),
              this.accomodationColumns.push(header);
          }
        }
      }
    },
    getPerPersonCostInfo() {
      console.log(this.posts.perPersonCostInfo.length);
      for (let i = 0; i < this.posts.perPersonCostInfo.length; i++) {
        if (i === 0) {
          let header = {};
          for (const property in this.posts.perPersonCostInfo[i]) {
            (header = {
              field: property,
              label:
                property === "passengers"
                  ? "NO. OF PAX"
                  : property.toUpperCase(),
              centered: true,
            }),
              this.perPersonCostColumns.push(header);
          }
        }
      }
    },
    getBannerInfo() {
      this.bannerInfo.overview = this.posts.overview;
      this.bannerInfo.title = this.posts.title;
      this.bannerInfo.subtitle = this.posts.subtitle;
    },
  },
  created() {
    window.scrollTo(0, 0);
    this.$http
      .get(`${process.env.BASE_URL}Data/PackageDetails/${this.packageId}.json`)
      .then((response) => {
        this.posts = response.data.data;
        console.log("post", this.posts);
        this.getAccomodationInfo();
        this.getPerPersonCostInfo();
        this.getBannerInfo();

        this.posts.heroImage = this.posts.heroImage
          ? require("../../assets/images/" + this.posts.heroImage)
          : "";
        if (this.posts.images) {
          for (let i = 0; i < this.posts.images.length; i++) {
            this.items.push({
              image: require("../../assets/images/" + this.posts.images[i]),
            });
          }
        }
      });
  },
};
</script>

<style lang="scss">
.image-ht {
  height: 300px !important;
}

.columns {
  padding: 1rem;
  &.is-even {
    background-color: whitesmoke;
  }
  margin: 0px 0px 0px 0px !important;
}

.column {
  padding-left: 0;
  padding-right: 0;

  .image {
    &.is-even {
      box-shadow: 5px 0 10px;
      height: 200px;
      width: 350px;
    }
    &.is-odd {
      box-shadow: -5px 0 10px;
      height: 200px;
      width: 350px;
    }
  }
  .media-content {
    margin-bottom: 1.5rem;
  }
}

.carousel-gallery {
  .carousel-slide {
    img {
      height: 40px;
    }
  }
}
.travel-detail {
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

  .days-container {
    text-align: left;
    font-size: 1rem;

    .card-content {
      padding: unset;
      .media-content {
        .title {
          color: #48c774;
        }
      }
      .content {
        .day-route {
          display: flex;
          svg {
            margin: 4px;
          }
        }
      }
    }
    .days {
      color: darkred;
      font-weight: 700;
    }
  }
  .imp-info-container {
    padding: 20px 0 20px 20%;
    text-align: left;
    .imp-heading {
      font-size: 24px;
    }
    .imp-description {
      padding-bottom: 6px;
      .imp-sub-container {
        padding-left: 24px;
      }
      .imp-title {
        font-family: "Mogra";
        color: #4a5258;
        text-transform: uppercase;
      }
      .imp-subtitle {
        .icon-text {
          display: flex;
          p {
            font-family: "Roboto", sans-serif;
            color: #4a5258;
            padding-bottom: 5px;
          }
        }
        svg {
          font-weight: 700;
          margin-top: 3px;
        }
      }
    }
  }

  #name {
    color: Black;
    padding-right: 0.5rem;
  }

  ul {
    list-style: disc;
    margin-left: 40px;
  }
}

.itinerary-container {
  padding: 2rem;
  display: flex;
  flex-direction: row;
  section {
    width: 100%;
  }
  .similartours {
    width: 30%;
  }
}

.day-title {
  font-size: 1rem !important;
  h4 {
    font-family: "Mogra";
    color: #4a5258;
    text-transform: uppercase;
  }
}

.day-subtitle {
  p {
    font-family: "Roboto", sans-serif;
    color: #4a5258;
    padding-bottom: 5px;
  }
}

.golden-banner-section {
  width: 100%;
  text-align: center;
  overflow: hidden;
  position: relative;
  z-index: 1;
  .golden-caption-section {
    position: absolute;
    bottom: 3px;
    left: 0;
    height: 130px;
    width: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 100%
    );
    .golden-caption {
      max-width: 1200px;
      margin: 0 auto;
      h4 {
        color: #fff;
        position: absolute;
        bottom: 22px;
        font: 50px/45px "SFProDisplay-Bold";
        padding-bottom: 15px;
      }
    }
  }
}
.table thead {
  background-color: #47caf0 !important;
  tr {
    th {
      .th-wrap {
        color: white !important;
      }
    }
  }
}
.tabs li.is-active a {
  border-bottom-color: #47caf0 !important;
  color: #47caf0 !important;
  font-weight: 700;
}

.per-person-heading {
  margin: 30px 0 0;
  font-size: 22px;
  border: 1px solid #dbdbdb;
  text-align: left;
  color: brown;
}

@media only screen and (max-width: 1366px) {
  .banner-inner {
    width: auto;
    right: 0px;
  }
}
</style>
