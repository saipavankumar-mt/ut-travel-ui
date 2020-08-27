<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-contact">
      <div class="navbar-item">Email: sales@uttranchalholidays.com</div>
      <div class="navbar-item">Call Us: +91-9368079393, +91-9359079393, +91-7830030003</div>
    </div>
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="/img/logo.6f0ade75.png" alt="Uttaranchal holidays" />
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" v-for="(navItem, idx) in navMenu" :key="idx">{{navItem}}</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      navMenu: [
        'Home',
        'Tour Packages',
        'Destinations',
        'Trekking',
        'Hotel',
        'Car Rental',
        'Helipad',
        'About Us',
        'Contact Us',
      ],
    };
  },
};
</script>

<style lang="scss">
.navbar {
  background: linear-gradient(-95deg, rgb(97, 192, 242), #e9ecef);
  padding-top: 0;
  padding-bottom: 0;
  .navbar-contact {
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 40;
    .navbar-item {
      margin-right: 15px;
      margin-top: 5px;
      color: red;
    }
  }
  .navbar-brand img {
    max-height: 4rem;
  }
  a.navbar-item {
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    align-self: flex-end;
    &:hover {
      text-decoration: none;
      text-decoration-color: white;
      background: inherit;
    }
  }
}
</style>