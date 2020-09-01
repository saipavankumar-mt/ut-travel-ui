<template>
  <div class="milestone-container">
    <div class="milestone-img">
        <img src="../../assets/images/roadmap.png" />
    </div>    
    <div class="milestone-text-from">
        <p class="milestone-title">{{item.title}}</p>
        <p class="milestone-kms">{{item.subtitle}}</p>
    </div>
    <div class="milestone-text-to">
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
    width:400px;
    height: 200px;
}

.milestone-img{
    margin-top: -55px;
    margin-left:-135px;
}

.milestone-text-from{
  position: absolute;
  top: 52%;
  left: 14%;
  transform: translate(-50%, -50%) rotate(-1deg);
  width: 40%;
}

.milestone-text-to{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(-1deg);
  width: 40%;
}
.milestone-title{
    font-weight: bold;
    font-size: 0.6rem;
    text-align: center;
}

.milestone-kms{
    font-weight: bold;
    font-size:0.5rem;
    text-align: center;
}
</style>
