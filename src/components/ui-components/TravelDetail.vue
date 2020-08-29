<template>
  <div class="travel-detail">
    hello
  </div>
</template>

<script>
export default {
  name: 'TravelDetail',
  components: {},
  data() {
    return {
      detailData: {},
    };
  },
  created: function() {
    const baseUrl = process.env.BASE_URL;
    this.$http.get(`${baseUrl}Data/Pckg4-0.json`).then((res) => {
      this.detailData = res;
    });
    console.log(this.detailData);
  },
};
</script>

<style lang="scss"></style>
