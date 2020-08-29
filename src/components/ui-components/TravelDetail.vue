<template>
  <div class="travel-detail">
    <div class="columns">
      <div class="column is-one-quarter">
        <img
          class="image"
          src="../../assets/images/destinations/nainital.webp"
          alt="destination"
        />
      </div>
      <div class="detail-container">
        <div class="detail-title">
          <div class="title is-3">
            {{ posts.title }}
          </div>
          <p class="quote subtitle is-5 is-italic">
            {{ posts.qoute }}
          </p>
        </div>
        <div class="description subtitle is-5">{{ posts.subtitle }}</div>
        <app-divider></app-divider>
        <div class="itinerary">
          <div><span id="name">Route: </span> {{ posts.route }}</div>
          <div><span id="name">Duration: </span> {{ posts.duration }}</div>
          <div><span id="name">Night Stay:</span> {{ posts.nightStay }}</div>
          <div
            class="days-container"
            v-for="item in posts['Description']"
            :key="item.id"
          >
            <div class="days">{{ item.title }}</div>
            <div>
              <ui
                class="day-route"
                v-for="(title, index) in item.subtitles"
                :key="index"
              >
                <li>{{ title }}</li>
              </ui>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- v-bind:src="require('../../assets/' + posts.HeroImage)" -->
  </div>
</template>

<script>
import axios from 'axios';
import AppDivider from './AppDivider.vue';

export default {
  name: 'TravelDetail',
  components: {
    AppDivider,
  },
  data() {
    return {
      posts: {},
      errors: [],
    };
  },
  methods: {
    getData() {
      const baseUrl = process.env.BASE_URL;
      return axios.get(`${baseUrl}Data/Pckg4-0.json`).then((res) => {
        this.detailData = res.data;
      });
    },
  },
  created() {
    axios.get(`${process.env.BASE_URL}Data/Pckg4-0.json`).then((response) => {
      this.posts = response.data.data[0];
      console.log(this.posts);
    });
  },
};
</script>

<style lang="scss">
.travel-detail {
  position: relative;
  .columns {
    margin: 0 !important;
  }

  .detail-container {
    padding: 32px;
    .quote {
      margin-left: 45%;
      color: red;
    }
    .detail-title {
      padding-bottom: 26px;
    }
    .itinerary {
      padding: 12px;
      color: white;
      font-weight: 700;
      .day-route {
      }
      .days-container {
        text-align: left;
        padding: 24px 16px;
        .days {
          color: darkred;
        }
      }
    }
    .description {
      color: #382d29;
    }
  }

  #name {
    color: darkred;
  }
}
</style>
