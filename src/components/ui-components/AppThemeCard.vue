<template>
  <div class="theme-card" @click="$emit('clickaction')">
    <div class="card-content">
      <div class="image">
        <img :src="getImageUrl" :alt="item.image" />
      </div>
      <div class="title">{{item.title}}</div>
      <div class="subtitle">{{item.packageCount}} Packages</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppThemeCard',
  props: {
    item: { type: Object },
  },
  computed: {
    getImageUrl() {
      return require('../../assets/svg/' + this.item.image);
    },
  },
};
</script>

<style lang="scss">
.theme-card {
  padding: 0 15px 30px;
  .card-content {
    background-color: white;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0px 0 1px rgba(10, 10, 10, 0.02);
    max-width: 100%;
    position: relative;
    .title {
      font: 18px 'Lato', sans-serif;
      font-weight: 600;
      color: #3e3f54;
    }
    .subtitle {
      font: 14px/18px 'Lato', sans-serif;
      font-weight: 600;
      color: #918f9b;
    }
    .image img {
      width: 25%;
      margin: auto;
      margin-bottom: 5%;
      transition: transform .3s ease-in-out;
    }
    &:hover {
      cursor: pointer;
      .image img {
        transform: translateY(-5px);
      }
    }
  }
}

@media only screen and (max-width: 640px) and (min-width: 360px) {
  .theme-card.column {
    padding: .5rem 0 !important;
  }
}
</style>
