<template>
  <div class="available-packages">
    <div class="available-packages-container">
      <img v-bind:src="require('../../assets/' + this.offerInfo.image)" alt />
      <div class="name">
        {{ this.offerInfo.title }}
        <div>{{ this.offerInfo.noOfPackages }}</div>
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

  // .name-container {
  //   color: white;
  //   .name {
  //     font-size: 20px;
  //     margin-top: 5px;
  //     background: linear-gradient(-95deg, #064e68, #9b9acc);
  //     padding: 5px;
  //     height: 60px;
  //   }
  // }
}
</style>
