<template>
  <div class="preview-card card" v-on:click="item.id ?redirect():''">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="getImageUrl" :alt="item.image" />
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
  name: "AppPreviewCard",
  props: {
    item: { type: Object, required: true },
    type: { type: String },
  },
  computed: {
    getImageUrl() {
      if (!this.item.image) {
        return;
      }
      // TODO: create folders for each type eg: destinations/[name].png , packages/[name].png
      // const type = this.item.type;
      // const fileName = this.item.image.name.toLowerCase();
      // const ext = this.item.image.ext;

      // return require(`../../assets/images/${type}/${fileName}.${ext}`);
      return require("../../assets/images/destinations/nainital.webp");
    },
  },
  methods: {
    redirect: function () {
      this.$router.push({
        name: "detail",
        params: { packageId: this.item.id },
      });
    },
  },
};
</script>

<style lang="scss">
.preview-card {
  min-height: 20rem;
  height: 100%;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;

  .image img {
    border-radius: 5px 5px 0 0;
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 2px;
    z-index: 50;
    transform: scale(1.08);
    .image img {
      transform: scale(1.05);
      border-radius: 0;
      transition: all 0.1s ease-in-out;
    }
  }
}
</style>
