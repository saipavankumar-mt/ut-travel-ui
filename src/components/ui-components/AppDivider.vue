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
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  justify-content: center;
  }
.rectangle-div{
  background-color: white;
  height: 0.35rem;
  width: 25%;  
  }

.circle-div{
  background-color: white;
  border-radius: 50%;
  height: 0.3rem;
  width: 0.35rem;
  margin-left: 25px;
  margin-right: 25px;
  }

  .arrow-right {
  width: 0; 
  height: 0; 
  border-top: 0.18rem solid transparent;
  border-bottom: 0.18rem solid transparent;
  
  border-left: 0.5rem solid white;
}

.arrow-left {
  width: 0; 
  height: 0; 
  border-top: 0.18rem solid transparent;
  border-bottom: 0.18rem solid transparent; 
  
  border-right:0.5rem solid white; 
}
</style>
