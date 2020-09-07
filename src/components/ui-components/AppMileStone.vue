<template>
  <div class="milestone-container">
    <div class="milestone-img">
      <img src="../../assets/images/roadmap.png" />
    </div>
    <div class="milestone-text-from">
      <p class="milestone-title">{{item[0].title}}</p>
      <p class="milestone-kms">{{item[0].subtitle}}</p>
    </div>
    <div class="milestone-text-to">
      <p class="milestone-title">{{item[1].title}}</p>
      <p class="milestone-kms">{{item[1].subtitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMileStone",
  components: {},
  props: {
    item: { type: Array, required: true },
  },
};
</script>

<style lang="scss">
.milestone-container {
  position: relative;
  text-align: center;
  width: 400px;
  height: 200px;
}

.milestone-img {
  margin-top: -55px;
  margin-left: -160px;
}

.milestone-text-from {
  position: absolute;
  top: 56%;
  left: 14%;
  transform: translate(-50%, -50%) rotate(-1deg);
  width: 10%;
}

.milestone-text-to {
  position: absolute;
  top: 72%;
  left: 36%;
  transform: translate(-50%, -50%) rotate(-1deg);
  width: 10%;
}

.milestone-title {
  font-weight: bold;
  font-size: 0.6rem;
  text-align: center;
}

.milestone-kms {
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
}
</style>
