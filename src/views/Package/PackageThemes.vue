<template>
  <div class="package-theme">
    <header class="theme-header">
      <h1 class="title">{{title}}</h1>
    </header>
    <section class="theme-content columns is-multiline">
      <app-theme-card
        class="column is-3"
        v-for="item in themes"
        :key="item.id"
        :item="item"
        @clickaction="redirect(item.id)"
      ></app-theme-card>
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
      alert(id + ' clicked');
    },
  },
};
</script>

<style lang="scss">
.package-theme {
  padding: 0 30px;
  .theme-header {
    background: none !important;
    padding: 3rem 15px 0;
    .title {
      font: 1.5rem/18px 'Lato', sans-serif;
      font-weight: 600;
      color: #3e3f54;
      text-align: left;
    }
  }
  .theme-content {
    padding: 30px 0;
  }
}

@media only screen and (max-width: 640px) and (min-width: 360px) {
  .package-theme {
    padding: 15px 7.5px 0;
    .theme-header {
      padding: 1rem 7.5px 0;
      .title {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
