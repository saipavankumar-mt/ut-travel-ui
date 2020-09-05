<template>
  <!-- v-bind:class="{'preview-card-hover': appPreviewSettings.showHover}" -->
  <!-- v-bind:style="{ padding: appPreviewSettings.padding +'!important' }" -->
  <div
    class="preview-card card"
    v-bind:class="{'preview-card-hover': appPreviewSettings.showHover}"
  >
    <div class="card-image">
      <figure :class="['image', appPreviewSettings.cardImage.imageSize]">
        <img :src="getImageUrl" :alt="getImageUrl" />
      </figure>
    </div>
    <div :class="['card-content', appPreviewSettings.cardContent]">
      <div class="content">
        <p class="title is-4" v-if="item.title">{{ item.title }}</p>
        <p class="subtitle is-7 is-italic" v-if="item.duration">Duration: {{ item.duration }}</p>
        <p class="subtitle is-5 is-italic" v-if="item.price">From: {{ item.price }}/-Per Person</p>
        <p class="subtitle is-7 is-italic" v-if="item.subtitle">{{ item.subtitle }}</p>
        <div class="book-now">
          <a @click="onViewMoreClick(item.key)" v-if="appPreviewSettings.showViewMore">View More</a>
          <b-button
            class
            v-if="appPreviewSettings.showBookNow"
            @click="openCardModal()"
            type="is-success"
            outlined
          >BOOK NOW</b-button>
        </div>
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
          showViewMore: false,
          showBookNow: false,
        };
      },
      type: Object,
    },
  },
  created() {},
  computed: {
    getImageUrl() {
      try {
        return require("../../assets/images/" + this.item.image);
      } catch (err) {
        return require("../../assets/images/KumaonHeritageTile.png");
      }
      // TODO: create folders for each type eg: destinations/[name].png , packages/[name].png
      // const type = this.item.type;
      // const fileName = this.item.image.name.toLowerCase();
      // const ext = this.item.image.ext;

      // return require(`../../assets/images/${type}/${fileName}.${ext}`);
      //return require("../../assets/images/destinations/nainital.webp");
    },
  },
  methods: {
    redirect: function () {
      this.$router.push({
        name: "detail",
        params: { packageId: this.item.key },
      });
    },
    onViewMoreClick(value) {
      this.$emit("viewMoreClick", value);
    },
    openCardModal() {
      this.$emit("openCardModal");
    },
  },
};
</script>

<style lang="scss">
.preview-card {
  height: 100%;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  .card-image > .image > img {
    border-radius: 4px 4px 0 0;
  }
  .card-content {
    padding: 0.75rem !important;
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
    padding: 6px;
    text-align: left;

    .title.is-4 {
      font-size: 20px;
      line-height: 20px;
      text-transform: capitalize;
      color: green;
      padding-bottom: 8px;
    }

    .subtitle {
      // margin-top: 4px !important;
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
      color: green;

      &:hover {
        opacity: 0.7;
      }
    }
  }
}
</style>
