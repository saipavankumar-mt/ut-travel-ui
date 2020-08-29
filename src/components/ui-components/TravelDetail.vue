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
      <div>
        <div>
          {{ posts.title }}
        </div>
        <div>
          {{ posts.qoute }}
        </div>
        <div>{{ posts.subtitle }}</div>
        <div>
          {{ posts.route }}
        </div>
        <div>Duration: {{ posts.duration }}</div>
        <div>Night Stay: {{ posts.nightStays }}</div>
        <div v-for="item in posts['Description']" :key="item.id">
          <div>{{ item.title }}</div>
          <div v-for="(title, index) in item.subtitles" :key="index">
            <div v-if="index != 0">,</div>
            <div>{{ title }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- v-bind:src="require('../../assets/' + posts.HeroImage)" -->
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'TravelDetail',
  components: {},
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
}
</style>
