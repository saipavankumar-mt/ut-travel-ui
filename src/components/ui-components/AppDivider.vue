<template>
  <div class="divider-tool">
        <div class="arrow-left"></div>
        <div class="rectangle-div"></div>
        <div class="arrow-right"></div>        
        <div class="circle-div"></div>
        <div class="arrow-left"></div>
        <div class="rectangle-div"></div>
        <div class="arrow-right"></div>
      </div>
</template>

<script>
export default {
  name: "AppDivider",
  components: {
  },  
};
</script>

<style lang="scss">

.divider-tool{
  display: flex;
  flex-direction: row;
  margin-top:5px;
  margin-bottom: 5px;
  justify-content: center;
  }
.rectangle-div{
  background-color: white;
  height: 10pxpx;
  width: 200px;  
  }

.circle-div{
  background-color: white;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-left: 25px;
  margin-right: 25px;
  }

  .arrow-right {
  width: 0; 
  height: 0; 
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  
  border-left: 15px solid white;
}

.arrow-left {
  width: 0; 
  height: 0; 
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent; 
  
  border-right:15px solid white; 
}
</style>
