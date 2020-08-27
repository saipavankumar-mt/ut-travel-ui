<template>
  <div class="offer-list">
    <div class="divider-container">
      <div class="divider">
        <div class="layer"></div>
        <div class="title">UttaraKhand Tour Packages</div>
      </div>
    </div>
    <div class="offer-list-container">
      <div class="offer-title" v-for="item in offerList" :key="item.id">
        <offer :offer-info="item"></offer>
      </div>
    </div>
  </div>
</template>

<script>
import Offer from "./Offer.vue";
export default {
  name: "OfferList",
  components: {
    Offer,
  },
  data() {
    return {
      offerList: [
        {
          id: 1,
          name: "Piligrimage Tour Packages",
          offerPer: 10,
          image: "OfferTiles/PackageOfferTile.jpg",
        },
        {
          id: 2,
          name: "Wildlife Tours Package",
          offerPer: 10,
          image: "OfferTiles/WildLifeOfferTile.jpg",
        },
        {
          id: 3,
          name: "Trekking Tours Package",
          offerPer: 10,
          image: "OfferTiles/TrekkingOfferTile.jpg",
        },
        {
          id: 4,
          name: "Hill Station Tours",
          offerPer: 10,
          image: "OfferTiles/HillStationOfferTile.jpg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.offer-list {
  background-image: url("../assets/trekking.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
}

.layer {
  background-color: rgba(19, 18, 18, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.offer-list-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.offer-title {
  width: 100%;
  padding: 10px;
}

.divider-container {
  color: white;
  .divider {
    //background: linear-gradient(-95deg, #064e68, #f8f8f8);
    padding: 5px;

    .title {
      font-size: 28px;
      padding: 46px;
      font-weight: 700;
    }
  }
}
</style>
