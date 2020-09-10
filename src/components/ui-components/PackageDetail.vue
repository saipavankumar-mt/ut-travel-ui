<template>
  <div class="travel-detail">
    <div class="banner">
      <div class="intro">
        <h1>
          <span>{{ posts.title }}</span> Package
        </h1>
        <!-- <div class="pricetag-wrapper">
          <div class="pricetag">
            <span>{{posts.duration}}</span>
          </div>
        </div>         -->
        <p>{{posts.subtitle}}</p>
        <div v-for="(item, i) in posts.overview" :key="i">
          <div v-if="i<=2  || i % 2 == 0">
            <h5>{{item.title}}</h5>
            <p>{{item.subtitle}}</p>
          </div>
        </div>
        <!-- <h5>Temperature</h5>
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
        </ul>-->
        <b-button class="is-blue" @click="cardModal()">Book Now</b-button>
      </div>
      <div class="banner-inner">
        <div>
          <img :src="posts.heroImage" alt="posts.heroImage" />
          <!-- <div class="nightStay">
            <div class="title"><h5> NIGHT STAY </h5></div>
            <div class="subtitle"><h5>{{posts.nightStay}}</h5></div> 
          </div> -->
        </div>        
        <div v-for="(item, i) in posts.overview" :key="i">
          <div v-if="i>2 && Math.abs(i % 2) == 1">
            <h5>{{item.title}}</h5>
            <p>{{item.subtitle}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="itinerary-container">
      <section>
        <b-tabs>
          <b-tab-item label="ITINERARY">
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
                            <span class="time">{{ title.time }}</span>&nbsp;
                            <span>{{title.activities}}</span>
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
export default {
  name: "PackageDetail",
  components: {
    SimilarPackages,
  },
  props: ["packageId"],
  data() {
    return {
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
  },
  created() {
    window.scrollTo(0, 0);
    this.$http
      .get(`${process.env.BASE_URL}Data/PackageDetails/${this.packageId}.json`)
      .then((response) => {
        this.posts = response.data.data;
        console.log(this.posts);
        this.getAccomodationInfo();
        this.getPerPersonCostInfo();
        this.posts.heroImage = require("../../assets/images/" +
          this.posts.heroImage);
        for (let i = 0; i < this.posts.images.length; i++) {
          this.items.push({
            image: require("../../assets/images/" + this.posts.images[i]),
          });
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
      .pricetag-wrapper{
        text-align: right;
          .pricetag{
          white-space:nowrap;
          position:relative;
          margin:0 5px 0 10px;
          displaY:inline-block;
          height:25px;
          border-radius: 0 5px 5px 0;
          padding: 0 25px 0 15px;
          background:#E8EDF0;
          border: 0 solid #C7D2D4;
          border-top-width:1px;
          border-bottom-width:1px;
          color:#999;
          line-height:23px;
        }
        .pricetag:after{
            position:absolute;
            right:0;
            margin:1px 7px;
            font-weight:bold;
            font-size:19px;
            content:"\00D7";
        }
        .pricetag:before{
            position:absolute;
            content:"\25CF";
            color:white;
            text-shadow: 0 0 1px #333;
            font-size:11px;
            line-height:0px;
            text-indent:12px;
            left:-15px;
            width: 1px;
            height:0px;
            border-right:14px solid #E8EDF0;
            border-top:  13px solid transparent;
            border-bottom:  13px solid transparent;
        } 
      }  
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
          margin-right: 4px;
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
  span {
    font-family: "Roboto", sans-serif;
    color: #4a5258;
    padding-bottom: 5px;
  }
  .time {
    font-weight: 700;
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
  color: #47caf0;
}

@media only screen and (max-width: 1366px) {
  .banner-inner {
    width: 45% !important;
    // height: 500px !important;
    right: 0px !important;
    img {
      width: -webkit-fill-available !important;
      // height: -webkit-fill-available !important;
      padding-bottom: 10px;
      border-bottom-left-radius: 35% 45%;
    }
    .nightStay{
      display: flex;
      flex-direction: column;
      align-items: center;
      .title{
        padding: 5px 10px 5px 10px;
        border-radius: 10%;
        background: #47caf0;
        width: fit-content;
      }
      .subtitle{
        padding: 7px 40px 15px 40px;
      }
    }
  }
}
</style>
