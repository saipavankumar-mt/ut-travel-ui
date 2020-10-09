<template>
  <nav class="breadcrumb is-small" aria-label="breadcrumbs">
    <ul>
      <li><router-link to="/" exact>Home</router-link></li>
      <template v-for="(crumb, idx) in crumbs">
        <li :class="{ 'is-active': idx === crumbs.length - 1 }" :key="idx">
          <router-link :to="crumb.to" exact>{{ crumb.text }}</router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'TheBreadCrumb',
  computed: {
    crumbs() {
      let pathArray = this.$route.path.split('/');
      pathArray = pathArray.filter(path => !!path);
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        let crumbText = path.toLowerCase().split('-').map(str => str.split('')[0].toUpperCase()+str.slice(1)).join(' ');
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            : '/' + path,
          text: this.$route.matched[idx].meta.breadCrumb || crumbText,
        });
        return breadcrumbArray;
      }, []);
      return breadcrumbs;
    },
  },
};
</script>

<style lang="scss">
.breadcrumb {
  width: 50%;
  position: absolute;
  top: 0;
  z-index: 1;
  margin: 0 !important;
  padding: .25rem 0 .25rem 2rem;
  // background: rgb(233, 233, 233);
  background-image: linear-gradient(90deg, #e9e9e9, transparent);
}
</style>