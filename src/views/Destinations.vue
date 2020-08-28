<template>
  <div class="destination columns is-multiline box">
    <app-destination-item class="column is-full" toggle-class="is-even"></app-destination-item>
    <app-destination-item class="column is-full" toggle-class="is-odd"></app-destination-item>
    <app-destination-item class="column is-full" toggle-class="is-even"></app-destination-item>
    <app-destination-item class="column is-full" toggle-class="is-odd"></app-destination-item>
  </div>
</template>

<script>
import AppDestinationItem from '../components/ui-components/AppDestinationItem';

export default {
  name: 'Destinations',
  components: {
    AppDestinationItem,
  }
};
</script>

<style lang="scss">
.destination {
  background-image: linear-gradient(-95deg, rgb(97, 192, 242), #f8f8f8);
  padding-left: 25px !important;
  padding-right: 25px !important;
  border-radius: 5px !important;
}
</style>
