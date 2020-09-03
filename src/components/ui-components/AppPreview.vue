<template>
  <div class="preview">
    <header class="preview-header hero is-dark is-bold" :class="'scroll-preview-'+scrollClass">
      <div class="hero-body">
        <h1 class="title">{{title}}</h1>
        <p class="is-italic">{{titleDesc}}</p>
      </div>
    </header>
    <section v-show="showAll" class="preview-all columns is-multiline">
      <template v-for="(item, idx) in previewItemsList">
        <div class="column" :class="isModelTwo ? 'is-6' : 'is-3' " :key="idx">
          <app-preview-card-model2 v-if="isModelTwo" :item="item"></app-preview-card-model2>
          <app-preview-card v-else :item="item"></app-preview-card>
        </div>
      </template>
    </section>

    <b-carousel-list
      v-show="!showAll"
      class="preview-carousel container"
      v-model="itemIndex"
      :data="previewItemsList"
      :items-to-show="itemsToShow"
      :arrow-hover="false"
    >
      <template slot="item" slot-scope="list">
        <app-preview-card-model2 v-if="isModelTwo" :item="list"></app-preview-card-model2>
        <app-preview-card v-else :item="list"></app-preview-card>
      </template>
    </b-carousel-list>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'AppPreview',
  components: {},
  data() {
    return {
      itemIndex: 0,
    };
  },
  props: {
    title: { type: String, required: true },
    titleDesc: { type: String },
    previewItemsList: { type: Array, required: true },
    isModelTwo: { type: Boolean, default: false },
    showAll: { type: Boolean, default: false },
    scrollClass: { type: String },
  },
  computed: {
    itemsToShow() {
      return this.isModelTwo ? 2 : 4;
    },
  },
};
</script>

<style lang="scss">
.preview {
  padding-bottom: 1.5rem;
  .preview-header {
    background: none !important;
    .title {
      margin-bottom: 0.3rem;
    }
    .is-italic {
      color: #efbb20;
    }
  }

  .preview-all,
  .preview-carousel {
    box-shadow: none !important;
    margin: 0 2rem !important;
    max-width: 100% !important;
    /deep/.carousel-slide {
      padding: 30px;
    }
    .column {
      padding: 30px !important;
      height: inherit;
    }
  }
}
</style>
