<template>
  <div class="preview">
    <header class="preview-header hero is-dark is-bold" :class="'scroll-preview-'+scrollClass">
      <div class="hero-body">
        <h1 class="title">{{title}}</h1>
        <p class="is-italic">{{titleDesc}}</p>
      </div>
    </header>
    <button class="toggle-view-btn button" @click="changeView('scroll-preview-'+scrollClass)">
      <span v-if="!showAll">View All {{toggleBtnLabel}}</span>
      <span v-else>View Less</span>
    </button>
    <section v-show="showAll" class="preview-all columns is-multiline is-mobile">
      <template v-for="(item, idx) in previewItemsList">
        <div class="column" :class="mobileCheck()? '': isModelTwo ? 'is-6' : 'is-3' " :key="idx">
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
      :items-to-show="mobileCheck()?1 :itemsToShow"
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
    mobileCheck: function () {
      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
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
      padding: 4rem 0 0 !important;
      /deep/.carousel-slide {
        padding: unset !important;
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
