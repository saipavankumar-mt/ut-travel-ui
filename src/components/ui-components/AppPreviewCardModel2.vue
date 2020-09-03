<template>
  <div class="pvmodel2-outer">
    <div class="pvmodel2-inner">
      <div class="pvmodel2-inner-img">
        <img src="../../assets/images/destinations/nainital.webp" />
      </div>
      <div class="pvmodel2-inner-title">
        <p class="pvmodel2-title">{{ item.title }}</p>
        <p class="is-7 is-italic">{{ item.route }}</p>
        <div class="pvmodel2-duration">
          <p>{{ item.duration }}</p>
        </div>
        <div class="pvmodel2-price">
          <p>From: &#8377; {{ item.price }}/-</p>
        </div>
      </div>
    </div>
    <div class="pvmodel2-subtitle">
      <p class="is-7 is-italic">{{ item.subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPreviewCardModel2',
  props: {
    item: { type: Object, required: true },
    image: { type: String },
  },
  methods: {
    redirect: function() {
      this.$router.push({
        name: 'detail',
        params: { packageId: this.item.key },
      });
    },
  },
};
</script>

<style lang="scss">
.pvmodel2-outer {
  // box-shadow: 5px 0 10px;
  background-color: white;
  height: 100%;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    // box-shadow: 0 0 15px 2px;
    box-shadow: 0 0 10px 1px;
    transform: scale(1.05);
  }
}

.pvmodel2-inner {
  display: flex;
  border-radius: 4px 4px 0 0;
}

.pvmodel2-inner-img {
  width: 50%;
  height: 100%;
  & img {
    border-radius: 5px 0 0 0;
  }
}

.pvmodel2-inner-title {
  width: 50%;
  display: flex;
  justify-content: center;
  background: white;
  flex-direction: column;
  padding: 1rem;
  overflow: hidden;
  overflow-wrap: anywhere;
  border-radius: 0 5px 0 0;
  .is-italic {
    color: #86690f;
  }
}

.pvmodel2-subtitle {
  padding: 0.75rem;
}

.pvmodel2-title {
  color: #2c3e50;
  font-weight: bold;
  font-size: 1.5rem;
}

.pvmodel2-duration {
  align-self: center;
  font-size: 1.5rem;
  font-family: 'Brush Script MT';
}

.pvmodel2-price {
  p {
    color: #690404;
    font-size: 1.8rem;
    font-family: 'Brush Script MT';
  }
}
</style>
