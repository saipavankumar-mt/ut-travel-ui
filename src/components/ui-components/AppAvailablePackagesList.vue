<template>
  <div class="available-packages-list">
    <div class="available-packages-list-container">
      <div class="available-packages-title" v-for="item in availablePackagesList" :key="item.id">
        <app-available-packages :available-packages-info="item"></app-available-packages>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAvailablePackagesList",
  components: {},
  data() {
    return {
      availablePackagesList: [],
    };
  },
  created() {
    this.$http
      .get(`${process.env.BASE_URL}Data/available-packages.json`)
      .then((response) => {
        this.availablePackagesList = response.data;
      });
  },
};
</script>

<style lang="scss">
.layer {
  background-color: rgba(19, 18, 18, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.available-packages-list-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.available-packages-title {
  width: 100%;
  padding: 10px 30px;
}

.divider-container {
  color: white;
  .divider {
    margin-top: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 5px;

    .title {
      font-size: 28px;
      padding: 46px;
      font-weight: 700;
    }
  }
}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .available-packages-list-container {
    flex-wrap: wrap;
    padding: 15px 7.5px;
    .available-packages-title {
      width: 50%;
      padding: 7.5px;
      &:last-of-type {
        width: 100%;
      }
    }
  }
}
</style>
