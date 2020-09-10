<template>
  <div class="destinations-old">
    <app-destination-item toggleClass="is-even"></app-destination-item>
    <app-destination-item toggleClass="is-odd"></app-destination-item>
    <app-destination-item toggleClass="is-even"></app-destination-item>
    <app-destination-item toggleClass="is-odd"></app-destination-item>
  </div>
</template>

<script>
export default {
  name: "DestinationsOld",
  components: {},
};
</script>

<style lang="scss" scoped>
.destinations-old {
  background-image: linear-gradient(-95deg, rgb(97, 192, 242), #f8f8f8);
  padding: 4rem !important;
}
@media only screen and (min-width: 360px) and (max-width: 640px) {
  .destinations-old {
    padding: 1rem !important;
  }
}
</style>
