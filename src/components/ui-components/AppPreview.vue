<template>
  <div class="preview">
    <section class="preview-header hero is-dark is-bold">
      <div class="hero-body">
        <h1 class="title">{{title}}</h1>
        <p class="is-italic">{{titleDesc}}</p>
      </div>
    </section>
    <b-carousel-list
      class="preview-carousel container"
      v-model="itemIndex"
      :data="previewItemsList"
      :items-to-show="4"
    >
      <template slot="item" slot-scope="list">
        <app-preview-card :item="list"></app-preview-card>
      </template>
    </b-carousel-list>
    <slot></slot>
  </div>
</template>

<script>
import AppPreviewCard from './AppPreviewCard.vue';

export default {
  name: 'AppPreview',
  components: {
    AppPreviewCard,
  },
  data() {
    return {
      itemIndex: 0,
    };
  },
  props: {
    title: { type: String, required: true },
    titleDesc: { type: String },
    previewItemsList: { type: Array, required: true },
  },
};
</script>

<style lang="scss">
.preview {
  padding-bottom: 1.5rem;
  background-color: #363636;
  background-image: linear-gradient(
    141deg,
    #1f191a 0%,
    #363636 71%,
    #46403f 100%
  );
  .preview-header {
    background: none !important;
    .title {
      margin-bottom: 0.3rem;
    }
    .is-italic{
    color:#efbb20;
    }
  }
  .preview-carousel {
    box-shadow: none !important;
    margin: 0 2rem !important;
    max-width: 100% !important;
    /deep/.carousel-slide {
      padding: 30px;
    }
  }

  
}
</style>
