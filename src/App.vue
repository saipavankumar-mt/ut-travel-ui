<template>
  <div id="app">
    <div class="app-container">
      <the-header></the-header>
      <div class="app-router" id="app-main-container">
        <router-view />
      </div>
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
// import Home from './views/Home.vue';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    // Home,
    TheHeader,
    TheFooter,
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
</style>
