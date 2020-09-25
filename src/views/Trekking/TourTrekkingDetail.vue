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
        <div
          v-for="(item, i) in trekkingPackages.description"
          :key="i"
        >
          <div>
            <h5>{{ item.title }}</h5>
            <p>{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
      <div class="banner-inner">
        <div class="hero-image">
          <img
            :src="trekkingPackages.heroImage"
            alt="trekkingPackages.heroImage"
          />
        </div>
        <div
          class="overview-container"
          v-if="trekkingPackages && trekkingPackages.overview"
        >
          <div class="overview-title">
            <!-- <img src="../../assets/images/trekking/area.png" alt="" /> -->
            <span> Area</span>:{{ trekkingPackages.overview.area }}
          </div>
          <div class="overview-title">
            <!-- <img src="../../assets/images/trekking/duration.png" alt="" /> -->
            <span> Duration</span>:{{ trekkingPackages.overview.duration }}
          </div>
          <div class="overview-title">
            <!-- <img src="../../assets/images/trekking/area.png" alt="" /> -->
            <span>Best Season</span>:{{ trekkingPackages.overview.bestSeason }}
          </div>
          <div class="overview-title">
            <!-- <img src="../../assets/images/trekking/area.png" alt="" /> -->
            <span> Grade</span>:{{ trekkingPackages.overview.difficultyRating }}
          </div>
          <div class="overview-title">
            <!-- <img src="../../assets/images/trekking/area.png" alt="" /> -->
            <span> Altitude</span>:{{ trekkingPackages.overview.Altitude }}
          </div>
          <div class="overview-title">
            <!-- <img src="../../assets/images/trekking/area.png" alt="" /> -->
            <span>Total Trekking</span>:{{
              trekkingPackages.overview.TotalTreking
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="itinerary-container">
      <section>
        <b-tabs>
          <!-- <b-tab-item label="OVERVIEW">
           
          </b-tab-item> -->
          <b-tab-item label="ITINERARY">
            <ul class="events">
              <li
                v-for="(item, i) in trekkingPackages.itinerary"
                :key="i"
              >
                <time>Day {{ item.day }}</time>
                <span><strong>{{ item.title }} </strong>
                  <p
                    v-for="(title, index) in item.activities"
                    :key="index"
                  >
                    {{ title }}
                  </p>
                </span>
              </li>
            </ul>
          </b-tab-item>
          <b-tab-item label="THINGS TO CARRY">
            <div class="things-to-carry-container">
              <div
                class="things-to-carry"
                v-for="(title, index) in trekkingPackages.thingsToCarry"
                :key="index"
              >
                <i class="fas fa-angle-double-right"></i>
                {{ title }}
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="INFORMATION">
            <div class="imp-info-container">
              <div
                class="imp-description"
                v-for="(item, i) in trekkingPackages.importantInfo"
                :key="i"
              >
                <span class="imp-title">{{ item.title }}:&nbsp;</span>
                <div class="imp-sub-container">
                  <div
                    class="imp-subtitle"
                    v-for="(title, index) in item.subtitles"
                    :key="index"
                  >
                    <i class="fas fa-angle-double-right"></i>
                    {{ title }}
                  </div>
                </div>
              </div>
            </div>
          </b-tab-item>
          <b-tab-item label="TRANSIT">
            <div class="columns">
              <template v-for="(item, index) in trekkingPackages.transit">
                <div
                  :key="index"
                  class="column"
                >
                  <div class="transit-title">
                    <figure class="image is-128x128">
                      <!-- <img src="../../assets/train.png" alt="Image" /> -->
                      <i
                        v-if="item.title === 'BY AIR'"
                        class="fas fa-train"
                      ></i>
                      <i
                        v-if="item.title === 'BY RAIL'"
                        class="fas fa-plane"
                      ></i>
                      <i
                        v-if="item.title === 'BY ROAD'"
                        class="fas fa-road"
                      ></i>
                    </figure>
                    {{ item.title }}
                  </div>
                  <div class="transit-subtitle">{{ item.subtitle }}</div>
                </div>
              </template>
            </div>
          </b-tab-item>
          <b-tab-item label="GALLERY">
            <div class="image-container">
              <b-carousel
                :autoplay="false"
                with-carousel-list
                :indicator="false"
              >
                <b-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                >
                  <figure class="image">
                    <img :src="item.image" />
                  </figure>
                </b-carousel-item>
                <span class="modal-close is-small" />
                <template
                  slot="list"
                  slot-scope="props"
                >
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
        </b-tabs>
      </section>
    </div>
    <div class="similartours">
      <similar-trekking
        :itineraryId="trekkingPackages.id"
        @similarPackageRouteChange="redirect"
      ></similar-trekking>
    </div>
  </div>
</template>

<script>
import SimilarTrekking from './SimilarTrekking.vue';
export default {
  name: 'TourTrekkingDetail',
  components: {
    SimilarTrekking,
  },
  data() {
    return {
      trekkingPackages: {},
      items: [],
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
      expanded: false,
      atRight: false,
      size: 'is-medium',
      type: 'is-toggle',
    };
  },
  props: ['trekkingId'],
  created() {
    this.getTrekkingPPackages();
  },
  methods: {
    redirect: function (value) {
      this.$router.push({
        name: 'trekking-detail',
        params: {
          trekkingName: value.key,
          trekkingId: value.id,
        },
      });
    },
    getTrekkingPPackages() {
      this.$http
        .get(
          `${process.env.BASE_URL}Data/TrekkingDetails/${this.trekkingId}.json`
        )
        .then((res) => {
          this.trekkingPackages = res.data.data;
          // console.log(this.trekkingPackages);
          this.trekkingPackages.heroImage = require('../../assets/images/' +
            this.trekkingPackages.heroImage);
          for (let i = 0; i < this.trekkingPackages.images.length; i++) {
            this.items.push({
              image: require('../../assets/images/' +
                this.trekkingPackages.images[i]),
            });
          }
        });
    },
  },
};
</script>

<style lang="scss">
.events {
  padding: 30px;
  li {
    display: flex;
  }
  time {
    position: relative;
    font-weight: 400;
    color: #b2b2b2;
    padding: 0 1.5em;
    font-size: 15px;
    line-height: 15px;

    &::after {
      content: '';
      position: absolute;
      z-index: 2;
      right: 0;
      top: 0;
      transform: translateX(50%);
      border-radius: 50%;
      background: rgb(96, 191, 243);
      border: 1px #ccc solid;
      width: 0.8em;
      height: 0.8em;
    }
  }
  span {
    padding: 0 1.5em 1.5em 1.5em;
    position: relative;
    p {
      color: #918f9b;
      font-size: 15px;
      line-height: 21px;
    }
  }
  span::before {
    content: '';
    position: absolute;
    z-index: 1;
    left: 0;
    height: 100%;
    border-left: 1px #ccc solid;
  }
  strong {
    display: block;
    font-size: 15px;
    line-height: 15px;
  }
}

.tour-trekking-detail {
  .overview-container {
    text-align: left;
    padding: 60px;
    .overview-title {
      padding-bottom: 2px;
      span {
        display: inline-block;
        width: 160px;
        font: 16px 'open_sansbold';
        color: #394048;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 1.2;
      }
      img {
        height: 28px;
        width: 31px;

        margin-right: 8px;
      }
    }
  }
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
          font: 20px/30px 'open_sansbold';
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
  }
  h5 {
    font: 16px 'open_sansbold';
    color: #394048;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 1.2;
  }

  .banner-inner {
    .hero-image {
      img {
        height: 350px !important;
        padding-bottom: unset;
        width: -webkit-fill-available !important;
        border-bottom-left-radius: unset !important;
      }
    }
  }

  .itinerary-container {
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
          font-family: 'Mogra';
          color: #4a5258;
          text-transform: uppercase;
        }
        .imp-subtitle {
          .icon-text {
            display: flex;
            p {
              font-family: 'Roboto', sans-serif;
              color: #4a5258;
              padding-bottom: 5px;
            }
          }
          svg {
            font-weight: 700;
            margin-top: 3px;
            margin-right: 4px;
          }
        }
      }
    }
    .transit-title {
      font-family: 'Mogra';
      color: #4a5258;
      text-transform: uppercase;
      .image {
        margin: auto;
        svg {
          font-size: 100px;
          color: #47caf0;
        }
      }
    }
    .transit-subtitle {
      font-family: 'Roboto', sans-serif;
      color: #4a5258;
      padding-bottom: 5px;
    }
    .things-to-carry-container {
      padding: 20px 0 20px 10%;
      text-align: left;
      .things-to-carry {
        display: flex;
        svg {
          margin-top: 3px;
          margin-right: 4px;
        }
      }
    }
  }
  .similartours {
    padding: 0 34px;
    /deep/.carousel-slide {
      padding: 14px;
    }
  }
}
</style>
