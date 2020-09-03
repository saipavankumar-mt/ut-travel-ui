<template>
  <!-- v-bind:class="{'preview-card-hover': appPreviewSettings.showHover}" -->
  <!-- v-bind:style="{ padding: appPreviewSettings.padding +'!important' }" -->
  <div
    class="preview-card card"
    v-bind:class="{'preview-card-hover': appPreviewSettings.showHover}"
    v-on:click="item.id ? redirect() : ''"
  >
    <div class="card-image">
      <figure :class="['image', appPreviewSettings.cardImage.imageSize]">
        <img :src="getImageUrl" :alt="item.image" />
      </figure>
    </div>
    <div :class="['card-content', appPreviewSettings.cardContent]">
      <div class="content">
        <p class="title is-4" v-if="item.title">{{ item.title }}</p>
        <p class="subtitle is-7 is-italic" v-if="item.subtitle">{{ item.subtitle }}</p>
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
    appPreviewSettings: {
      default: function () {
        return {
          showHover: true,
          cardContent: "",
          cardImage: {
            imageSize: "is-4by3",
          },
        };
      },
      type: Object,
    },
  },
  created() {},
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
        params: { packageId: this.item.key },
      });
    },
  },
};
</script>

<style lang="scss">
.preview-card {
  height: 100%;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  .card-image > .image > img {
    border-radius: 5px 5px 0 0;
  }
  .card-content {
    // padding: 1rem !important;
  }
}

.preview-card-hover {
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 2px;
    transform: scale(1.09);
  }
}

.card-setting {
  padding: unset !important;
  .content {
    padding: 6px;
    text-align: left;
    .title.is-4 {
      font-size: 20px;
      font-weight: unset;
    }
  }
}
</style>
