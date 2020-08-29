<template>
  <div id="app">
    <the-header></the-header>
    <home></home>
  </div>
</template>

<script>
import Home from "./views/Home.vue";
import TheHeader from "./components/TheHeader.vue";
export default {
  name: "App",
  components: {
    Home,
    TheHeader,
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
</style>
