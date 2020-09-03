<template>
  <div>
    <div class="banner">
      <div class="intro">
        <h1>
          <span>Uttranchal Tour</span> Packages
        </h1>
        <p>
          India, the world’s 7th biggest country by area, and one of the oldest
          civilizations in the world, has lots to offer to the travellers around
          the world. Explore the diversity of incredible India with our India
          tour packages that let you explore the magnificence of nature; thrill
          of adventure; rich heritage; soul-soothing spirituality and vibrant
          culture. Come and explore the best of India with our Indian holiday
          packages.
        </p>
      </div>
      <img class="banner-inner" src="../assets/images/india-tour-banner.png" alt="kashmir-banner" />
    </div>
    <div class="itinerary-container">
      <section>
        <b-tabs>
          <b-tab-item
            label="DEVOTIONAL YATRAS"
            pack="fas"
            icon="map-marked-alt"
            size="is-small"
            class="columns"
          >
            <div class="columns">
              <app-preview-card
                class="column"
                v-for="(item, idx) in packages"
                :key="idx"
                :item="item"
              ></app-preview-card>
            </div>
          </b-tab-item>
          <b-tab-item label="BEAUTIFUL UTTRANCHAL" icon="library-music"></b-tab-item>
          <b-tab-item label="ADVENTURE PACKAGES"></b-tab-item>
        </b-tabs>
      </section>
    </div>
  </div>
</template>

<script>
// import OfferList from './OfferList.vue';
import AppPreviewCard from "../components/ui-components/AppPreviewCard";
export default {
  name: "TourPackages",
  components: {
    // OfferList,
    AppPreviewCard,
  },
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
      //   console.log('Inside get packages');
      //   this.$http
      //     .get(`${process.env.BASE_URL}data/packages.json`)
      //     .then((res) => {
      //       console.log(res);
      //       console.log(this.itineraryId);
      //       this.title = res.data.title;
      //       this.titleDesc = res.data.titleDesc;
      //       this.packages = res.data.items.filter(
      //         (item) => item.id !== this.itineraryId
      //       );
      //     });
      this.packages = [
        {
          id: "Pckg4-0",
          title: "Chardham",
          route: "Yamunotri - Gangotri - Kedarnath - Badrinath",
          image: "chardham.png",
          duration: "11 Nights / 12 Days",
          price: "41000",
          subtitle: "",
        },
        {
          id: "Pckg3-0",
          title: "Teendham",
          route: "Gangotri - Kedarnath - Badrinath",
          image: "theendham.png",
          duration: "7 Nights / 8 Days",
          price: "35000",
          subtitle: "",
        },
        {
          id: "Pckg2-0",
          title: "Dodham",
          route: "Kedarnath - Badrinath",
          image: "dodham.png",
          duration: "4 Nights / 5 Days",
          price: "25000",
          subtitle: "",
        },
        {
          id: "Pckg5-0",
          title: "Panchkedar",
          route: "Kedarnath - Madhmaeshwar - Tungnath - Rudranath - Kalpeshwar",
          image: "panchkedar.png",
          duration: "14 Nights / 15 Days",
          price: "51999",
          subtitle: "",
        },
        {
          id: "Pckg5-1",
          title: "Panchbadri",
          route:
            "Vishal Badri (Badrinath) - Yogdhyan Badri - Bhavishya Badri - Vridha Badri - Adi Badri",
          image: "panchkedar.png",
          duration: "14 Nights / 15 Days",
          price: "49999",
          subtitle: "",
        },
        {
          id: "Pckg5-2",
          title: "Panchprayag",
          route:
            "Karanprayag - Nandprayag - Rudraprayag - Vishnuprayag - Devpryag",
          image: "panchkedar.png",
          duration: "14 Nights / 15 Days",
          price: "49999",
          subtitle: ")",
        },
      ];
    },
  },
};
</script>

<style lang="scss">
.inner-banner .intro {
  width: 640px;
  float: left;
}

.banner {
  display: flex;
}
@media only screen and (max-width: 1366px) {
  .banner-inner {
    width: auto;
    right: 0px;
  }
}
</style>
