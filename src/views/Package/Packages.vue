<template>
  <div class="packages">
    <app-preview
      v-for="curPackage in packages"
      :key="curPackage.id"
      :class="curPackage.key"
      :category-info="curPackage"
      route-category="detail"
    ></app-preview>
  </div>
</template>

<script>
export default {
  name: 'Packages',
  components: {},
  data() {
    return {
      packages: [],
    };
  },
  created() {
    this.getPackages();
  },
  methods: {
    getPackages() {
      this.$http
        .get(`${process.env.BASE_URL}Data/packages-preview.json`)
        .then((res) => {
          this.packages = res.data;
        });
    },
  },
};
</script>

<style lang="scss">
.packages {
  background-color: inherit;
}
</style>
