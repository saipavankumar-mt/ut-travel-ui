<template>
  <div class="milestone-art-container">
    <img src="../../assets/images/milestoneart.png" />
    <div class="milestone-art-text">
        <p class="milestone-art-title">{{item[0].title}}</p>
        <p class="milestone-art-kms">{{item[0].subtitle}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppMileStoneArt",
  components: {
  }, 
  props: {
      item: { type: Array, required: true }
  } 
};
</script>

<style lang="scss">
.milestone-art-container{
    position: relative;
    text-align: center;
}

.milestone-art-text{
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-14deg);
    overflow: hidden;
    color: wheat;
}

.milestone-art-title{
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
}

.milestone-art-kms{
    font-weight: bold;
    text-align: center;
    font-size: 0.8rem;;
}
</style>
