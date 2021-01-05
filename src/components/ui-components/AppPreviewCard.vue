<template>
  <div
    class="preview-card card"
    v-bind:class="{'preview-card-hover': appPreviewSettings.showHover}"
  >
    <div class="card-image">
      <figure :class="['image', appPreviewSettings.cardImage.imageSize,{'thumbnail': appPreviewSettings.imageBlurOnHover}]">
        <div
          class="button-container"
          v-if="appPreviewSettings.hoverAction.type==='BUTTON'"
        >
          <div class="preview-button">
            <b-button @click="onViewClick(item)">{{appPreviewSettings.hoverAction.text}}</b-button>
          </div>
        </div>
        <div
          class="description"
          v-if="appPreviewSettings.hoverAction.type==='TEXT'"
        >
          <p>{{item.description}}</p>
        </div>
        <img
          :src="getImageUrl"
          :alt="getImageUrl"
        />
      </figure>
    </div>
    <div :class="['card-content', appPreviewSettings.cardContent]">
      <div class="content">
        <p
          class="title is-4"
          v-if="item.title"
        >{{ item.title }}</p>
        <p
          class="title is-4"
          v-if="item.name"
        >{{ item.name }}</p>
        <p
          class="subtitle is-7"
          v-if="item.subtitle"
        >{{ item.subtitle }}</p>
        <p
          class="subtitle is-7 is-italic"
          v-if="item.duration"
        >Duration: {{ item.duration }}</p>
        <p
          class="subtitle control"
          v-if="item.rating"
        >
          <b-rate
            :value="item.rating"
            disabled
          />
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPreviewCard',
  props: {
    item: { type: Object, required: true },
    type: { type: String, default: 'Destination' },
    appPreviewSettings: {
      default: function () {
        return {
          showHover: false,
          cardContent: 'card-setting',
          cardImage: {
            imageSize: !this.$isMobile() ? 'is-5by3' : 'is-5by3',
          },
          imageBlurOnHover: true,
          hoverAction: {
            show: true,
            text: `View ${this.type}`,
            type: 'BUTTON',
          },
        };
      },
      type: Object,
    },
  },
  created() {},
  computed: {
    getImageUrl() {
      try {
        return require('../../assets/images/' + this.item.image);
      } catch (err) {
        return require('../../assets/images/KumaonHeritageTile.png');
      }
      // TODO: create folders for each type eg: destinations/[name].png , packages/[name].png
      // const type = this.item.type;
      // const fileName = this.item.image.name.toLowerCase();
      // const ext = this.item.image.ext;

      // return require(`../../assets/images/${type}/${fileName}.${ext}`);
    },
  },
  methods: {
    redirect: function () {
      this.$router.push({
        name: 'detail',
        params: { packageName: this.item.key, packageId: this.item.id },
      });
    },
    onViewClick(value) {
      this.$emit('viewMoreClick', value);
    },
    openCardModal() {
      this.$emit('openCardModal');
    },
  },
};
</script>

<style lang="scss">
// .rate {
//   position: absolute;
//   left: 181px;
//   bottom: 0;
//   top: 39px;
//   z-index: 10;
//   transform: rotate(30deg);
// }
.preview-card {
  height: 100%;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  box-shadow: none;

  .card-image > .image > img {
    border-radius: 4px 4px 0 0;
  }
  .card-content {
    // padding: 0.75rem !important;
    padding: 0.5rem 0 !important;
  }
}

.preview-card-hover {
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 15px 2px;
    transform: scale(1.07);
  }
}

.card-setting {
  // &.card-content {
  //   padding: unset !important;
  // }
  .content {
    font-family: Bahnschrift SemiBold;
    padding-top: 4px;
    text-align: left;

    .title.is-4 {
      font-size: 13px;
      line-height: 18px;
      text-transform: uppercase;
      // color: rgb(96, 191, 243);
      color: #3e3f54;
      // padding-bottom: 8px;
      margin: 0;
    }

    .subtitle {
      margin-top: 0px !important;
      font-style: unset !important;
      text-transform: capitalize;
      color: #64666b;
      font-weight: 700;
    }
  }
  .book-now {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      font-size: 14px;
      color: rgb(96, 191, 243);

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
.thumbnail {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.thumbnail > img {
  max-width: 100%;
  height: 100%;
  transition: all 0.3s ease-in;
}

.description {
  top: 0;
  position: absolute;
  background: rgba(1, 1, 1, 0.7);
  color: #fff;
  width: 100%;
  height: 100%;
  opacity: 0;

  transition: all 0.3s ease;
  font-size: 12px;
  z-index: 2;
  p {
    color: #60bff3 white;
    padding: 12px;
    &:hover {
      border-color: #60bff3;

      color: white !important;
    }
  }
}

.preview-button {
  position: absolute;
  top: 40%;
  width: 100%;
  height: 100%;
}

.thumbnail .button-container {
  top: 0;
  position: absolute;
  background: rgba(1, 1, 1, 0.8);
  color: #fff;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: all 0.3s ease;
  line-height: 300px;
  text-align: center;
  font-size: 30px;
  z-index: 2;

  button {
    color: #60bff3 !important;
    background: transparent;
    border-radius: 2rem;

    &:hover {
      background-color: #60bff3;
      color: white !important;
      border-color: #60bff3;
    }
  }
}

.thumbnail:hover > img {
  transform: scale(1.2);
  // transition: all 0.5s ease-in-out;
}

.thumbnail:hover > div {
  opacity: 1;
}
</style>
