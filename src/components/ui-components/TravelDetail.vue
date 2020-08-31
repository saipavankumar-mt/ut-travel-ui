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

    <div>
      <div class="days-container" v-for="(item, i) in posts['Description']" :key="i">
        <div class="columns">
          <div class="column is-one-quarter" v-if="checkIfIndexIsOdd(i)">
            <img
              class="image"
              :class="checkIfIndexIsOdd(i)?'is-even':''"
              src="../../assets/images/destinations/nainital.webp"
              alt="destination"
            />
          </div>
          <div class="column">
            <div class="card-content has-text-left">
              <div class="media-content">
                <p class="title is-5">{{ item.title }}</p>
              </div>
              <div class="content has-text-dark-grey">
                <ul>
                  <li
                    class="day-route"
                    v-for="(title, index) in item.subtitles"
                    :key="index"
                  >{{ title }}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="column is-one-quarter" v-if="!checkIfIndexIsOdd(i)">
            <img
              class="image"
              :class="!checkIfIndexIsOdd(i)?'is-odd':''"
              src="../../assets/images/destinations/nainital.webp"
              alt="destination"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- v-bind:src="require('../../assets/' + posts.HeroImage)" -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "TravelDetail",
  components: {},
  data() {
    return {
      posts: {},
      errors: [],

      gallery: false,
      al: {
        hasGrayscale: true,
        itemsToShow: 2,
        breakpoints: {
          768: {
            hasGrayscale: false,
            itemsToShow: 4,
          },
          960: {
            hasGrayscale: true,
            itemsToShow: 6,
          },
        },
      },
      items: [
        {
          title: "Slide 1",
          image: "https://picsum.photos/id/0/1230/500",
        },
        {
          title: "Slide 2",
          image: "https://picsum.photos/id/1/1230/500",
        },
        {
          title: "Slide 3",
          image: "https://picsum.photos/id/2/1230/500",
        },
        {
          title: "Slide 4",
          image: "https://picsum.photos/id/3/1230/500",
        },
        {
          title: "Slide 5",
          image: "https://picsum.photos/id/4/1230/500",
        },
        {
          title: "Slide 6",
          image: "https://picsum.photos/id/5/1230/500",
        },
        {
          title: "Slide 7",
          image: "https://picsum.photos/id/6/1230/500",
        },
        {
          title: "Slide 8",
          image: "https://picsum.photos/id/7/1230/500",
        },
      ],
    };
  },
  methods: {
    getData() {
      const baseUrl = process.env.BASE_URL;
      return axios.get(`${baseUrl}Data/Pckg4-0.json`).then((res) => {
        this.detailData = res.data;
      });
    },
    checkIfIndexIsOdd(index) {
      console.log(index);
      return index % 2;
    },
  },
  created() {
    this.$http
      .get(`${process.env.BASE_URL}Data/Pckg4-0.json`)
      .then((response) => {
        this.posts = response.data.data[0];
        console.log(this.posts);
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
    }
    &.is-odd {
      box-shadow: -5px 0 10px;
    }
  }
  .media-content {
    margin-bottom: 1.5rem;
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
        padding: 12px 8px;
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
    }
    .days {
      color: darkred;
      font-weight: 700;
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
