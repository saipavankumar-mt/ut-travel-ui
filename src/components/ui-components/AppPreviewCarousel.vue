<template>
  <b-carousel
    class="preview-carousel"
    v-model="slideIndex"
    animated="slide"
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
        <img v-bind:src="require('../../assets/images/' + item.image)" :alt="item.image" />
        <button class="button is-primary" @click="goToDetail(item)">Explore Now</button>
      </div>
    </b-carousel-item>
  </b-carousel>
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
  methods: {
    goToDetail(item) {
      this.$router.push({
        name: 'detail',
        params: { packageName: item.key, packageId: item.id },
        query: {
          key: 'adventurePackages',
          id: item.id,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.preview-carousel {
  padding: 3rem 45px 30px;
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
        border-radius: 4px;
      }
      img {
        height: 330px;
        border-radius: 4px;
        width: 100%;
      }
      .button {
        position: absolute;
        border-radius: unset;
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
@media only screen and (min-width: 360px) and (max-width: 640px) {
  .preview-carousel {
    padding: 15px;
    min-height: 96px;
    .carousel-items {
      overflow: initial !important;
      height: 96px;
      .preview-carousel-content {
        height: 96px;
        border-radius: 4px;
        .title {
          letter-spacing: 1px;
          font-size: 1rem;
        }
        img {
          height: 96px;
        }
        .button {
          right: 1.2%;
          height: 15%;
          width: 20%;
          font-size: 10px;
        }
      }
      .carousel-arrow {
        opacity: 0;
      }
    }
  }
}
</style>
