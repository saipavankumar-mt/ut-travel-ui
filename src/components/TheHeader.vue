<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-contact">
      <div class="navbar-item">Email: sales@uttranchalholidays.com</div>
      <div class="navbar-item">Call Us: +91-9359079393, +91-9368079393, +91-7830030003</div>
    </div>
    <div class="navbar-brand">
      <a class="navbar-item">
        <img src="/img/logo.6f0ade75.png" alt="Uttaranchal holidays" />
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link
          class="navbar-item"
          v-for="(navItem, idx) in navMenu"
          :to="navItem.path || '/'"
          exact
          :key="idx"
        >
          <b-icon :icon="navItem.icon" size="is-small" />&nbsp;
          <span>{{ navItem.label }}</span>
        </router-link>
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
        { label: 'Home', icon: 'home', path: '/home' },
        { label: 'Tour Packages', icon: 'bag-checked', path: '/tour-packages' },
        { label: 'Destinations', icon: 'map-marker' },
        { label: 'Trekking', icon: 'walk' },
        // { label: 'Hotel', icon: 'bed' },
        // { label: 'Car Rental', icon: 'car' },
        // { label: 'Helipad', icon: 'helicopter' },
        { label: 'About Us', icon: 'head-question' },
        { label: 'Contact Us', icon: 'card-account-phone' },
      ],
    };
  },
};
</script>

<style lang="scss">
.navbar {
  box-shadow: 0 1px 5px;
  padding-top: 0;
  padding-bottom: 0;
  .navbar-contact {
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 40;
    padding-top: 0.2rem;
    box-shadow: -2px 2px 3px -2px;

    .navbar-item {
      .icon {
        padding-right: 5px;
      }
      font-family: 'Roboto', sans-serif;
      font-size: 0.95rem;
      color: rgb(216, 81, 39);
    }
  }
  .navbar-brand img {
    max-height: 4rem;
  }
  a.navbar-item {
    color: #585858;
    //color: rgb(97,192,243);
    // font-weight: bold;
    // font-family: 'Mogra';
    font-family: 'SFProDisplay-Bold';
    text-transform: uppercase;
    font-size: 1rem;
    align-self: flex-end;
    transition: all 0.2s ease-in;
    background: inherit !important;
    .icon {
      padding-right: 5px;
    }
  }
}
</style>
