<template>
  <div class="preview-carousel">
    <b-carousel
      v-model="slideIndex"
      animated="fade"
      :has-drag="true"
      :autoplay="true"
      :interval="3000"
      :repeat="true"
      :pause-hover="true"
      :pause-info="false"
      :indicator="false"
      :arrow-hover="false"
      icon-size="is-large"
    >
      <b-carousel-item v-for="item in carouselItems" :key="item.id">
        <div class="preview-carousel-content">
          <div class="title">{{item.title}}</div>
          <img v-bind:src="require('../../assets/images/' + item.image)" v-bind:alt="item.image" />
          <button class="button is-primary">Explore Now</button>
        </div>
      </b-carousel-item>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'AppPreviewCarousel',
  props: {
    carouselItems: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      slideIndex: 0,
    };
  },
};
</script>

<style lang="scss">
.preview-carousel {
  padding: 30px 45px;
  border-radius: 4px;
  .carousel-items {
    overflow: initial !important;
    .preview-carousel-content {
      height: 330px;
      border-radius: 4px;
      .title {
        position: absolute;
        padding: 2rem;
        bottom: 0;
        margin-bottom: unset;
        font-family: 'Holtwood One SC', serif;
        color: oldlace;
        letter-spacing: 3px;
        font-size: 2rem;
        background: linear-gradient(360deg, #272424, transparent);
        width: 100%;
      }
      img {
        height: 330px;
        border-radius: 4px;
        width: 100%;
        object-fit: cover;
      }
      .button {
        position: absolute;
        top: 80%;
        right: 3%;
      }
    }
    .carousel-arrow {
      .icon {
        box-shadow: 5px 5px 10px rgba(226, 230, 240, 0.5);
        &.has-icons-left {
          left: -1.5rem !important;
        }
        &.has-icons-right {
          right: -1.5rem !important;
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
  }
}
</style>
