<template>
  <div class="package-theme">
    <header class="theme-header hero is-bold">
      <div class="hero-body">
        <h1 class="title">{{title}}</h1>
      </div>
    </header>
    <section class="theme-content columns is-multiline">
      <app-theme-card class="column is-3" v-for="item in themes" :key="item.id" :item="item" @clickaction="redirect(item.id)"></app-theme-card>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PackageThemes',
  data() {
    return {
      title: '',
      themes: [],
    };
  },
  created() {
    this.getThemes();
  },
  methods: {
    getThemes() {
      this.$http
        .get(`${process.env.BASE_URL}Data/packages-by-theme.json`)
        .then((res) => {
          this.title = res.data.title;
          this.themes = res.data.items;
        });
    },
    redirect(id) {
      alert(id + ' clicked')
    }
  },
};
</script>

<style lang="scss">
.package-theme {
  padding: 0 30px 15px;
  .theme-header {
    background: none !important;
    .title {
      margin-bottom: 0.3rem;
      font-family: 'Lato', sans-serif;
      font-weight: 600;
      color: rgb(62, 63, 84);
    }
  }
  .theme-content {
    padding: 0;
  }
}
</style>
