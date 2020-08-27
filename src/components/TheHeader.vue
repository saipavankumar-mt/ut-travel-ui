<template>
  
  <header class="container clearfix">
    <nav class="navbar navbar-dark bg-primary p-0 mb-2 fixed-top">
      <a class="navbar-brand p-1 pl-5" href="index.html">
        <img class="logo p-2" src="../assets/logo.png" alt="logo.png" target="_blank" />
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {

    }
  },
};
</script>

<style>
.logo {
  height: 5rem;
}

.navbar {
  background: linear-gradient(-95deg, rgb(97,192,242), #e9ecef);
}
</style>