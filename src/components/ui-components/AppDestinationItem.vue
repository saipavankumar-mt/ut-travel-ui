<template>
  <div class="destination-item">
    <div class="columns" v-on:click="redirect()">
      <div class="column is-one-quarter" v-if="toggleClass === 'is-even'">
        <img
          class="image"
          :class="toggleClass"
          src="../../assets/images/destinations/nainital.webp"
          alt="destination"
        />
      </div>
      <div class="column">
        <div class="card-content has-text-left">
          <div class="media-content" :class="toggleClass === 'is-odd' && 'has-text-right'">
            <p class="title is-4">Nainital</p>
            <p class="subtitle is-7 is-italic">...Peachy and Decency, Sign A Peace Treaty</p>
          </div>
          <div class="content has-text-dark-grey">
            Beautiful mountain, crystal-clear lakes, famous temples and greenery
            all over is Nainital for you. Popularly known as the City of Lakes,
            Nainital is an idyllic escape from the humdrum of city life.
            Enveloped in a thick foil of nature, accentuated by the scent of the
            flowering blossoms blending miraculously in the crisp fresh air,
            Nainital is truly the treasure trove of Kumano. It is among the most
            visited hill station of the North India since British period.
          </div>
        </div>
      </div>
      <div class="column is-one-quarter" v-if="toggleClass === 'is-odd'">
        <img
          class="image"
          :class="toggleClass"
          src="../../assets/images/destinations/nainital.webp"
          alt="destination"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import TravelDetailVue from './TravelDetail.vue';
export default {
  name: "AppDestinationItem",
  components: {
    // 'travel-detail': TravelDetailVue,
  },
  props: {
    toggleClass: {
      type: String,
      default: "is-even",
    },
  },

  methods: {
    redirect: function () {
      this.$router.push({ name: "detail", params: { packageId: "Pckg4-0" } });
    },
  },
};
</script>

<style lang="scss">
.destination-item {
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
}
</style>
