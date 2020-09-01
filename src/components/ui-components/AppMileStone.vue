<template>
  <div class="milestone-container">
    <img src="../../assets/images/milestone.png" />
    <div class="milestone-text">
        <p class="milestone-title">{{item.title}}</p>
        <p class="milestone-kms">{{item.subtitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMileStone",
  components: {
  },  
  props: {
      item: { type: Object, required: true }
  }
};
</script>

<style lang="scss">
.milestone-container{
    position: relative;
    text-align: center;
}

.milestone-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-1deg);
  width: 40%;
}

.milestone-title{
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
}

.milestone-kms{
    font-weight: bold;
    font-size:0.8rem;
    text-align: center;
}
</style>
