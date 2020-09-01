<template>
  <app-preview
    class="destinations"
    :title="title"
    :title-desc="titleDesc"
    :preview-items-list="destinations"
    :show-all="showAll"
    :scroll-class="scrollClass"
  >
    <div class="columns">
      <div class="column">
        <button class="button" @click="scrollToView('scroll-preview-'+scrollClass)">
          <span v-if="!showAll">View All Destinations</span>
          <span v-else>View Less</span>
        </button>
      </div>
    </div>
  </app-preview>
</template>

<script>
export default {
  name: 'Destinations',
  components: {},
  data() {
    return {
      title: '',
      titleDesc: '',
      destinations: [],
      showAll: false,
    };
  },
  created() {
    this.getDestinations();
  },
  methods: {
    scrollToView(className) {
      this.showAll = !this.showAll;
      if (this.showAll) {
        document.querySelector('.' + className).scrollIntoView({
          behavior: 'smooth',
        });
      }
    },
    getDestinations() {
      this.$http
        .get(`${process.env.BASE_URL}data/destinations.json`)
        .then((res) => {
          this.title = res.data.title;
          this.titleDesc = res.data.titleDesc;
          this.destinations = this.showAll
            ? res.data.items
            : res.data.items.slice(0, 8);
        });
    },
  },
  computed: {
    scrollClass() {
      return this.title
        .split(' ')
        .map((s) => s.toLowerCase())
        .join('-');
    },
  },
};
</script>

<style lang="scss">
.destinations {
  background-image: url('../assets/images/DeoriyaTal.jpg');
  background-size: cover;
  background-blend-mode: overlay;
  background-color: #363636;
  /deep/ .preview-all {
    transition: all 0.3s ease-in-out;
  }
}
</style>
