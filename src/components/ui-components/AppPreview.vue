<template>
  <div class="preview">
    <header class="preview-header hero is-dark is-bold" :class="'scroll-preview-'+scrollClass">
      <div class="hero-body">
        <h1 class="title">{{title}}</h1>
      </div>
    </header>
    <button class="toggle-view-btn button" @click="$emit('changeview')">
      <span v-if="!showAll">View All {{toggleBtnLabel}}</span>
      <span v-else>View Less</span>
    </button>
    <section v-show="showAll" class="preview-all columns is-multiline">
      <template v-for="(item, idx) in previewItemsList">
        <div class="column" :class="$isMobile()? '': isModelTwo ? 'is-6' : 'is-3' " :key="idx">
          <!-- <app-preview-card-model2 v-if="isModelTwo" :item="item"></app-preview-card-model2> -->
          <app-preview-card :item="item"></app-preview-card>
        </div>
      </template>
    </section>

    <b-carousel-list
      v-show="!showAll"
      class="preview-carousel container"
      v-model="itemIndex"
      :data="previewItemsList"
      :items-to-show="$isMobile()?1.5 :itemsToShow"
      :items-to-list="$isMobile()?1 :itemsToShow"
      :arrow-hover="false"
      icon-size="is-medium"
      :refresh="true"
    >
      <template slot="item" slot-scope="list">
        <!-- <app-preview-card-model2 v-if="isModelTwo" :item="list"></app-preview-card-model2> -->
        <app-preview-card :item="list" :type="toggleBtnLabel.slice(0, -1)"></app-preview-card>
      </template>
    </b-carousel-list>
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
    toggleBtnLabel: { type: String },
  },
  computed: {
    itemsToShow() {
      return this.isModelTwo ? 5 : 5;
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
  padding-left: 30px;
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
    max-width: 100% !important;
    padding: 2rem 0 0;
    /deep/.carousel-slide {
      padding: 30px 30px 30px 0;
    }
    .column {
      padding: 30px !important;
      height: inherit;
    }
    .carousel-arrow {
      .icon {
        top: 5%;
        display: flex !important;
        -webkit-transform: translateY(-5%);
        -moz-transform: translateY(-5%);
        transform: translateY(-5%);
        &.has-icons-left {
          right: 5rem;
          left: unset;
        }
        &.has-icons-right {
          right: 2rem;
        }
        &:after {
          content: '';
          width: 0;
          height: 0;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 0;
          margin: auto;
          z-index: -1;
          border-radius: 50%;
          background: #47caf0;
          -webkit-transition: 0.2s;
          -o-transition: 0.2s;
          transition: 0.2s;
        }
        &:hover {
          color: #fff;
          &:after {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    /deep/ .card-content {
      padding: 0.5rem !important;
      .content {
        .title.is-4 {
          font: 16px "Lato", sans-serif;
          font-weight: 600;
          color: rgb(62, 63, 84);
          text-transform: capitalize;
        }
        .subtitle.is-7 {
          font: 12px/18px "Lato", sans-serif;
          font-weight: 600;
          color: rgb(145, 143, 155);
          margin-top: 0 !important;
        } 
      }
    }
  }
  .toggle-view-btn {
    position: absolute;
    transform: translateY(30%);
    -webkit-transform: translateY(30%);
    -moz-transform: translateY(30%);
    right: 8rem;
    border-radius: 2rem;
    height: 2.3rem;
    z-index: 1;
    transition: all .3s ease;
    overflow: hidden;
    color: #47caf0;
    &:hover {
      background: #47caf0;
      color: #fff;
      border: 1px solid #47caf0;
      &:after {
        width: 100%;
      }
    }
    &:after {
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 0;
      content: '';
      background: #47caf0;
      -webkit-transition: 0.5s;
      -o-transition: 0.5s;
      transition: 0.5s;
      z-index: -1;
    }
  }
}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .preview {
    .preview-all,
    .preview-carousel {
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
  }
}
</style>
