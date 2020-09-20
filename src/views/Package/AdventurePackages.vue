<template>
  <app-preview-carousel :carousel-items="packages"></app-preview-carousel>
</template>

<script>
export default {
  name: 'AdventurePackages',
  data() {
    return {
      packages: [],
    };
  },
  created() {
    this.$http
      .get(`${process.env.BASE_URL}Data/adventure-packages.json`)
      .then((response) => {
        this.packages = response.data;
      });
  },
};
</script>

<style lang="scss">
</style>