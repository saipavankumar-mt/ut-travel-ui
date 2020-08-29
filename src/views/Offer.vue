<template>
  <div class="offer">
    <div class="offer-container">
      <!-- <div> -->
      <img v-bind:src="require('../assets/' + this.offerInfo.image)" alt />
      <div class="name-container">
        <div class="name">
          <div>{{ this.offerInfo.name }}</div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Offer",
  components: {},
  props: {
    offerInfo: Object,
  },
  created: function () {},
};
</script>

<style lang="scss">
.offer {
  // width: 450px;

  .offer-container {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  img {
    width: 100%;
    height: 250px;
  }
  .name-container {
    color: white;
    .name {
      font-size: 20px;
      margin-top: 5px;
      background: linear-gradient(-95deg, #064e68, #9b9acc);
      padding: 5px;
      height: 60px;
    }
  }
}
</style>
