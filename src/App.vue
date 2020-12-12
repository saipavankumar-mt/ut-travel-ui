<template>
  <div id="app">
    <div class="app-container">
      <div :class="{ 'side-navbar-open': disableScroll }">
        <the-header @onToggle="onToggle"></the-header>
        <the-bread-crumb v-if="showBreadCrumb"></the-bread-crumb>
        <div class="app-router" id="app-main-container">
          <app-router-view />
        </div>
        <the-footer></the-footer>
      </div>
    </div>
  </div>
</template>

<script>
// import Home from './views/Home.vue';
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import TheBreadCrumb from './components/TheBreadCrumb.vue';

export default {
  name: 'App',
  data() {
    return {
      disableScroll: false,
    };
  },
  computed: {
    showBreadCrumb() {
      return (this.$route.path !== '/') && !this.$isMobile();
    }
  },
  methods: {
    onToggle(value) {
      this.disableScroll = value;
    },
  },
  directives: {
    'click-outside': {
      bind: function(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
          // here I check that click was outside the el and his childrens
          if (!(el == event.target || el.contains(event.target))) {
            // and if it did, call method provided in attribute value
            vnode.context[binding.expression](event);
          }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
        document.body.addEventListener('touchstart', el.clickOutsideEvent);
      },
      unbind: function(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
        document.body.removeEventListener('touchstart', el.clickOutsideEvent);
      },
      stopProp(event) {
        event.stopPropagation();
      },
    },
  },
  components: {
    // Home,
    TheHeader,
    TheFooter,
    TheBreadCrumb,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
.app-container {
  position: absolute;
  // overflow-y: auto;
  top: 80px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

.app-router {
  overflow: hidden;
}

.is-blue {
  background-color: #47caf0 !important;
  color: white !important;
  font-weight: 700;
}

.side-navbar-open {
  position: fixed;
  overflow: hidden;
  width: 100%;
}
@media only screen and (min-width: 360px) and (max-width: 640px) {
  .app-container {
    top: 64px;
  }
}
</style>
