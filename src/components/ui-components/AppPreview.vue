<template>
  <div class="preview">
    <header class="preview-header">
      <h1 class="title">{{ categoryInfo.title }}</h1>
    </header>
    <button
      class="toggle-view-btn button"
      @click="goToCategory(categoryInfo.key)"
    >
      <span>View All {{ categoryInfo.type }}s</span>
    </button>
    <b-carousel-list
      class="preview-carousel container"
      v-model="itemIndex"
      :data="categoryInfo.items"
      :items-to-show="$isMobile() ? 2 : itemsToShow"
      :items-to-list="$isMobile() ? 1 : itemsToShow"
      :arrow-hover="false"
      icon-size="is-medium"
      :refresh="true"
    >
      <template slot="item" slot-scope="list">
        <app-preview-card
          :item="list"
          :type="categoryInfo.type"
          @viewMoreClick="goToDetail($event, categoryInfo.key)"
        ></app-preview-card>
      </template>
    </b-carousel-list>
  </div>
</template>

<script>
import {
  homePageViewAll as viewAllMapping,
  homePageViewTile as detailRouteMapping,
} from '../../utils/path-mappings';

export default {
  name: 'AppPreview',
  components: {},
  data() {
    return {
      itemIndex: 0,
    };
  },
  props: {
    categoryInfo: { type: Object, required: true },
    routeCategory: { type: String },
    itemsToShow: { type: Number, default: 5 },
  },
  methods: {
    goToDetail(value, categoryKey) {
      const routeObj = detailRouteMapping(value, categoryKey);
      this.$router.push({
        name: routeObj.routeName,
        params: routeObj.routeParams,
        query: {
          key: categoryKey,
          id: value.id,
        },
      });
    },
    goToCategory(categoryKey) {
      this.$router.push({
        name: viewAllMapping[categoryKey].routeName,
        params: {
          currentTabIndex: viewAllMapping[categoryKey].tabIndex,
          scroll: true,
        },
      });
    },
  },
};
</script>

<style lang="scss">
$carousel-arrow-color: #47caf0;
.preview {
  padding: 0 30px;
  .preview-header {
    background: none !important;
    padding: 3rem 10px 0;
    margin-bottom: -2.45rem;
    .title {
      font: 1.5rem/18px 'Lato', sans-serif;
      font-weight: 600;
      color: #3e3f54;
      text-align: left;
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
      padding: 30px 10px;
    }
    .column {
      padding: 30px !important;
      height: inherit;
    }
    .carousel-arrow {
      .icon {
        display: flex !important;
        border-color: #dbdbdb;
        top: 5%;
        transform: translateY(-5%);
        -webkit-transform: translateY(-5%);
        -moz-transform: translateY(-5%);
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
      // padding: 0.5rem 0 !important;
      .content {
        .title.is-4 {
          // font: 16px 'Lato', sans-serif;
          font-size: 13px;
          font-weight: 600;
          // color: rgb(62, 63, 84);
          // text-transform: capitalize;
        }
        .subtitle.is-7 {
          // font: 12px/18px 'Lato', sans-serif;
          // line-height: 18px;
          font-weight: 600;
          color: rgb(145, 143, 155);
          margin-top: 0 !important;
        }
      }
    }
    /deep/ .preview-card .button {
      background: transparent;
      border-radius: 2rem;
      &:hover {
        background: #47caf0;
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
    transition: all 0.3s ease;
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
    position: relative;
    padding: 15px 7.5px 0;
    .preview-header {
      padding: 7.5px;
      margin-bottom: unset;
      .title {
        font-size: 1.3rem;
      }
    }
    .toggle-view-btn {
      bottom: 1.2rem;
      right: 7rem;
      height: 2rem;
      font-size: 14px;
      transform: unset;
      -webkit-transform: unset;
      -moz-transform: unset;
    }
    .preview-all,
    .preview-carousel {
      padding: 0 0 3rem;
      /deep/.carousel-slide {
        padding: 15px 7.5px;
        border: none;
        .card-content .content {
          .title.is-4 {
            // font-size: 14px;
            font-size: 12px;
            line-height: 14px;
            margin-bottom: 0.25rem;
          }
          .subtitle.is-7 {
            font-size: 11px;
            line-height: 12px;
          }
        }
        .preview-card .button {
          height: 2rem;
          font-size: 14px;
        }
      }
      .carousel-arrow {
        .icon {
          transform: translateY(-92%);
          -webkit-transform: translateY(-92%);
          -moz-transform: translateY(-92%);
          top: 92%;
          &.has-icons-right {
            right: 0.75rem;
          }
          &.has-icons-left {
            right: 3.5rem;
          }
        }
      }
    }
  }
}
</style>
