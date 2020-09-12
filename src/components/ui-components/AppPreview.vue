<template>
  <div class="preview">
    <header class="preview-header hero is-dark is-bold" :class="'scroll-preview-'+scrollClass">
      <div class="hero-body">
        <h1 class="title">{{title}}</h1>        
      </div>
    </header>
    <button class="toggle-view-btn button" @click="changeView('scroll-preview-'+scrollClass)">
      <span v-if="!showAll">View All {{toggleBtnLabel}}</span>
      <span v-else>View Less</span>
    </button>
    <section v-show="showAll" class="preview-all columns is-multiline">
      <template v-for="(item, idx) in previewItemsList">
        <div class="column" :class="$isMobile()? '': isModelTwo ? 'is-6' : 'is-3' " :key="idx">
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
      :items-to-show="$isMobile()?1.5 :itemsToShow"
      :arrow-hover="false"
      icon-prev="arrow-left"
      icon-next="arrow-right"
      icon-size="is-medium"
    >
      <template slot="item" slot-scope="list">
        <app-preview-card-model2 v-if="isModelTwo" :item="list"></app-preview-card-model2>
        <app-preview-card v-else :item="list"></app-preview-card>
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
export default {
  name: "AppPreview",
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
    toggleBtnLabel: { type: String },
  },
  computed: {
    itemsToShow() {
      return this.isModelTwo ? 2 : 4;
    },
  },
  methods: {
    changeView(className) {
      this.$emit("changeview");
      document.querySelector("." + className).scrollIntoView({
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
$carousel-arrow-color: #47caf0;
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
    padding: 2rem 0 0;
    /deep/.carousel-slide {
      padding: 30px;
    }
    .column {
      padding: 30px !important;
      height: inherit;
    }
    .carousel-arrow {
      .icon {
        top: 4%;
        -webkit-transform: translateY(-4%);
        -moz-transform: translateY(-4%);
        transform: translateY(-4%);
        &.has-icons-left {
          right: 5rem;
          left: unset;
        }
        &.has-icons-right {
          right: 2rem;
        }
      }
    }
  }
  .toggle-view-btn {
    position: absolute;
    transform: translateY(30%);
    -webkit-transform: translateY(30%);
    -moz-transform: translateY(30%);
    right: 10rem;
    border-radius: 2rem;
    height: 2.3rem;
    z-index: 1;
  }
}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .preview {
    .preview-all,
    .preview-carousel {
      margin: 0 1rem !important;
      padding: 4rem 0 0 !important;
      /deep/.carousel-slide {
        padding: 10px 10px 10px 0 !important;
      }
      .carousel-arrow {
        .icon {
          top: 3%;
        }
        .icon.has-icons-right {
          right: 0;
        }
      }
    }
    .toggle-view-btn {
      //right: 5rem;
    }
  }
}
</style>
