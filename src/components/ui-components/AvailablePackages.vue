<template>
  <div class="available-packages">
    <div class="available-packages-container">
      <figure :class="{ 'image is-2by1': $isMobile() }">
        <img v-bind:src="require('../../assets/' + this.availablePackagesInfo.image)" alt />
      </figure>
      <div class="name">
        <div>{{ this.availablePackagesInfo.title }}</div>
        <div>{{ this.availablePackagesInfo.noOfPackages }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AvailablePackages",
  components: {},
  props: {
    availablePackagesInfo: Object,
  },
  created: function () {},
};
</script>

<style lang="scss">
.available-packages {
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 2px;
    transform: scale(1.07);
  }
  .available-packages-tile {
    width: 100%;
    margin: 10px;
    background: white;
  }

  .available-packages-container {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  img {
    width: 100%;
    height: 130px;
  }

  .name {
    position: absolute;
    top: 0;
    border-radius: 4px;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7)
    );
    font-size: 20px;
    color: #fff;
    padding: 8px;
    width: 100%;
    height: 100%;
    line-height: 1.2em;
  }
}
@media only screen and (min-width: 360px) and (max-width: 640px) {
  .available-packages {
    .name {
      padding: 70px;
    }
  }
}
</style>
