<template>
  <div class="travel-detail">
    <div class="travel-detail-container">
      <div class="image-container">
        <!-- <img class="image" src="../../assets/images/destinations/nainital.webp" alt="destination" /> -->
        <b-carousel :autoplay="false" with-carousel-list :indicator="false" :overlay="gallery">
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
      <div class="detail-container">
        <div class="detail-title">
          <div class="title is-3">{{ posts.title }}</div>
          <p class="quote subtitle is-5 is-italic">{{ posts.qoute }}</p>
        </div>
        <div class="description is-6 is-italic">
          <div>{{ posts.subtitle }}</div>
        </div>
        <div class="itinerary">
          <div>
            <span id="name">Route:</span>
            <span class="is-italic route">{{ posts.route }}</span>
          </div>
          <div>
            <span id="name">Duration:</span>
            <span class="is-italic route">{{ posts.duration }}</span>
          </div>
          <div>
            <span id="name">Night Stay:</span>
            <span class="is-italic route">{{ posts.nightStay }}</span>
          </div>
        </div>
        <router-link :to="{ name: 'contact'}">
          <b-button type="is-primary">Book Now</b-button>
        </router-link>
      </div>
    </div>

    <div class="days-container">
      <div v-for="(item, i) in posts['description']" :key="i">
        <div class="columns">
          <div class="column is-one-quarter" v-if="checkIfIndexIsOdd(i)">
            <img
              class="image"
              :class="checkIfIndexIsOdd(i)?'is-even':''"
              v-bind:src="require('../../assets/images/' + item.image)"
              alt="destination"
            />
          </div>
          <div class="column">
            <div class="card-content has-text-left">
              <div class="media-content">
                <p class="title is-5">{{ item.title }}</p>
              </div>
              <div class="content has-text-dark-grey">
                <div class="day-route" v-for="(title, index) in item.subtitles" :key="index">
                  <i class="fas fa-atom"></i>
                  <div>{{ title }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-one-quarter" v-if="!checkIfIndexIsOdd(i)">
            <img
              class="image"
              :class="!checkIfIndexIsOdd(i)?'is-odd':''"
              v-bind:src="require('../../assets/images/' + item.image)"
              alt="destination"
            />
          </div>
        </div>
      </div>
      <div class="imp-info-container">
        <div class="imp-description" v-for="(item, i) in posts['importantInfo']" :key="i">
          <span class="imp-title">{{item.title}}:&nbsp;</span>
          <div class="imp-sub-container">
            <div class="imp-subtitle" v-for="(title, index) in item.subtitles" :key="index">
              <i class="fas fa-atom"></i>
              {{ title }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- v-bind:src="require('../../assets/' + posts.HeroImage)" -->
  </div>
</template>

<script>
export default {
  name: "TravelDetail",
  components: {},
  data() {
    return {
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
  },
  created() {
    this.$http
      .get(`${process.env.BASE_URL}Data/Pckg4-0.json`)
      .then((response) => {
        this.posts = response.data.data[0];
        for (let i = 0; i < this.posts.images.length; i++) {
          this.items.push({
            image: require("../../assets/images/" + this.posts.images[i]),
          });
        }
        console.log(this.items);
      });
  },
};
</script>

<style lang="scss">
.image-ht {
  height: 250px !important;
}
.column {
  padding-left: 0;
  padding-right: 0;
  .image {
    &.is-even {
      box-shadow: 5px 0 10px;
      // height: 190px;
    }
    &.is-odd {
      box-shadow: -5px 0 10px;
      // height: 190px;
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
  position: relative;
  background: white;
  margin: 40px;
  .detail-title {
    .title {
      color: #2c3e50;
      font-weight: bold;
      font-size: 2rem;
    }
  }
  .travel-detail-container {
    display: flex;
    .image-container {
      width: 40%;
      padding: 30px;
    }

    .detail-container {
      .quote {
        margin-left: 45%;
        color: red;
      }
      .detail-title {
        padding: 8px;
      }
      .itinerary {
        padding: 18px 8px;
        font-weight: 700;
        text-align: left;

        .route {
          color: #86690f;
        }
      }
      .description {
        color: blue;
        text-shadow: 2px 2px 4px #8c7676;
      }
      button {
        display: flex;
        margin-left: 8px;
      }
    }
  }

  .days-container {
    text-align: left;
    padding: 8px 16px;
    font-size: 14px;
    .card-content {
      padding: unset;
      .media-content {
        margin-bottom: 5px;
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
    padding: 20px 0;
    .imp-heading {
      font-size: 24px;
    }
    .imp-description {
      padding-bottom: 6px;
      color: #930;
      font-weight: 700;
      .imp-sub-container {
        padding-left: 24px;
      }
      .imp-title {
        span {
        }
      }
      .imp-subtitle {
      }
    }
  }

  #name {
    color: darkred;
    padding-right: 6px;
  }

  ul {
    list-style: disc;
    margin-left: 40px;
  }
}
</style>
