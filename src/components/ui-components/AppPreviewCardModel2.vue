<template>
  <div class="pvmodel2-outer">
      <div class="pvmodel2-inner">
          <div class="pvmodel2-inner-img">
            <img src="../../assets/images/destinations/nainital.webp" />
          </div>          
          <div class="pvmodel2-inner-title">
              <p class="pvmodel2-title">{{ item.title }}</p>
              <p class="is-7 is-italic">{{ item.subtitle }}</p>
              <div class="pvmodel2-duration"><p> {{item.duration}} </p></div>
              <div class="pvmodel2-price"><p> From: &#8377; {{item.price}}/- </p></div>
          </div>
      </div>
      <div class="pvmodel2-subtitles">
          <p></p>
      </div>
  </div>
</template>

<script>
export default {
  name: "AppPreviewCardModel2",
  props: {
    item: { type: Object, required: true },
    image: { type: String },
  },
  created() {
    console.log({ item: this.item });
  },
  methods: {
    redirect: function () {
      this.$router.push({
        name: "Detail",
        params: { packageId: this.item.id },
      });
    },
  },
};
</script>

<style lang="scss">

.pvmodel2-inner{
    display: flex;
}

.pvmodel2-inner-img{
    width:40%;
    height: 100%;
}

.pvmodel2-inner-title{
    width: 60%;
    display: flex;
    align-items: center;
    background: white;
    flex-direction: column;
}

.pvmodel2-title{
    color: #2c3e50;
    font-weight: bold;
    font-size: 1.5rem;
}

.pvmodel2-duration {
  align-self: center;
  font-size: 1.5rem;
  font-family: "Brush Script MT";
}

.pvmodel2-price {
  p {
    color: #690404;
    font-size: 1.8rem;
    font-family: "Brush Script MT";
  }
}
</style>
