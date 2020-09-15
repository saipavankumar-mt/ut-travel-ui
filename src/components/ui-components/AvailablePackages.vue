<template>
  <div class="available-packages" @click="redirect()">
    <div class="available-packages-container">
      <!-- <div :class="{ 'image is-2by1': $isMobile() }"> -->
      <div class="package-title">
        <span class="no-of-packages">{{ availablePackagesInfo.noOfPackages }}</span>
        &nbsp;
        <div>
          <span>{{ availablePackagesInfo.title }}</span>
        </div>
        <div>
          <img v-bind:src="require('../../assets/images/' + availablePackagesInfo.image)" alt />
        </div>
      </div>

      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import EventBus from "../../utils/event-bus";
export default {
  name: "AvailablePackages",
  components: {},

  props: {
    availablePackagesInfo: Object,
  },
  methods: {
    emitMethod() {
      setTimeout(() => {
        EventBus.$emit("packageActiveTab", 1);
      }, 0);
    },
    redirect() {
      this.emitMethod();
      this.$router.push({
        path: this.availablePackagesInfo.path,
      });
    },
  },
  created: function () {},
};
</script>

<style lang="scss">
.available-packages {
  background: white;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 2px;
    transform: scale(1.07);
    background: rgb(96, 191, 243);
    span {
      color: white;
    }
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

    .package-title {
      font-family: "SFProDisplay-Bold";
      font-weight: 700;
      .no-of-packages {
        font-size: 34px;
      }
      .plus-sign {
        font-size: 28px;
      }
    }
  }

  img {
    width: 100%;
    height: 150px;
    padding: 2px 10px;
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

    img {
      height: 170px;
    }
  }
}
</style>
