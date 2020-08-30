<template>
  <div class="preview-card card">
    <div class="card-image">
      <figure class="image is-4by3">
        <!-- <img :src="'/img/'+item.image"> -->
        <img src="../../assets/images/destinations/nainital.webp" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        <p class="title is-4">{{ item.title }}</p>
        <p class="subtitle is-7 is-italic">{{ item.subtitle }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPreviewCard',
  props: {
    item: { type: Object, required: true },
    image: { type: String },
  },
  created() {
    console.log({item: this.item});
  },
};
</script>

<style lang="scss">
.preview-card {
  border-radius: 5px;
  .image img {
    border-radius: 5px 5px 0 0;
  }
  &:hover {
    cursor: pointer;
  }
}
</style>
