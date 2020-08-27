<template>
  <div>
    <div class="top-nav">
      <div class="top-nav-item">Email: sales@uttranchalholidays.com</div>
      <div class="top-nav-item">Call Us: +91-9368079393, +91-9359079393, +91-7830030003</div>
    </div>
    <b-navbar fixed-top>
      <template slot="brand">
        <b-navbar-item>
          <img src="../assets/logo.png" alt="Uttaranchal holidays" />
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item>Home</b-navbar-item>
        <b-navbar-item>Tour Packages</b-navbar-item>
        <b-navbar-item>Destinations</b-navbar-item>
        <b-navbar-item>Trekking</b-navbar-item>
        <b-navbar-item>Hotel</b-navbar-item>
        <b-navbar-item>Car Rental</b-navbar-item>
        <b-navbar-item>Helipad</b-navbar-item>
        <b-navbar-item>About Us</b-navbar-item>
        <b-navbar-item>Contact Us</b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.top-nav {
  display: flex;
  position: fixed;
  right: 0;
  z-index: 40;  
  .top-nav-item {
    margin-right: 25px;
    margin-top: 5px;
    color: red;
  }
}
.navbar {
  background: linear-gradient(-95deg, rgb(97, 192, 242), #e9ecef);
  .navbar-brand img {
    max-height: 3rem;
  }
  a.navbar-item {
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    &:hover {
      text-decoration: none;
      text-decoration-color: white;
      background: inherit;
    }
  }
}
</style>