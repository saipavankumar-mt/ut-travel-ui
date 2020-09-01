<template>
  <app-preview
    class="packages"
    :title="title"
    :title-desc="titleDesc"
    :preview-items-list="packages"
    :is-model-two="true"
    :show-all="showAll"
    :scroll-class="scrollClass"
  >
    <div class="columns">
      <div class="column">
        <button class="button" @click="scrollToView('scroll-preview-'+scrollClass)">
          <span v-if="!showAll">View All Packages</span>
          <span v-else>View Less</span>
        </button>
      </div>
    </div>
  </app-preview>
</template>

<script>
export default {
  name: 'Packages',
  components: {},
  data() {
    return {
      title: '',
      titleDesc: '',
      packages: [],
      showAll: false,
    };
  },
  created() {
    this.getPackages();
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
    getPackages() {
      this.$http
        .get(`${process.env.BASE_URL}data/packages.json`)
        .then((res) => {
          this.title = res.data.title;
          this.titleDesc = res.data.titleDesc;
          this.packages = this.showAll
            ? res.data.items
            : res.data.items.slice(0, 4);
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
.packages {
  // background-image: url('../assets/images/DeoriyaTal.jpg');
  background-image: linear-gradient(
    141deg,
    #1f191a 0%,
    #363636 71%,
    #46403f 100%
  );
  background-color: #363636;
  background-size: cover;
  background-blend-mode: overlay;
}
</style>
