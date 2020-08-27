<template>
  <div>
    <div class="divider-container">
      <div class="divider">
        UttaraKhand Tour Packages
      </div>
      <app-divider></app-divider>
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
import AppDivider from "../components/ui-components/AppDivider.vue";
export default {
  name: "OfferList",
  components: {
    Offer,
    AppDivider
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
        }
      ],
    };
  },
};
</script>

<style lang="scss">
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
    margin-top: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px;
  }
}
</style>
