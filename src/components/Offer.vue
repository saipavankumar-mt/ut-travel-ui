<template>
  <div class="offer">
    <div class="offer-container">
      <img v-bind:src="require('../assets/' + this.offerInfo.image)" alt="" />
      <div class="name-container">
        <div class="name">
          <div>{{ offerInfo.offerPer }}% off on {{ this.offerInfo.name }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offer',
  components: {},
  props: {
    offerInfo: Object,
  },
  created: function() {},
};
</script>

<style lang="scss">
.offer {
  width: 100%;

  .offer-container {
    margin: 10px;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  img {
    width: 100%;
  }
  .name-container {
    position: absolute;
    color: white;
    top: 35%;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 20px;
    margin: auto;
    .name {
      margin: 0 30px;
      color: white;
      background-color: rgba(0, 0, 0, 0.65);
      font-family: Verdana, Geneva, sans-serif;
      color: #fff;
      z-index: 1;
    }
  }
}
</style>
