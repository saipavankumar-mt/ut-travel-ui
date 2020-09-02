<template>
  <nav class="navbar is-fixed-top">
    <div class="navbar-contact">
      <div class="navbar-item">Email: sales@uttranchalholidays.com</div>
      <div class="navbar-item">
        Call Us: +91-9359079393, +91-9368079393, +91-7830030003
      </div>
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
  background: linear-gradient(-95deg, rgb(196, 213, 221), #e9ecef);
  padding-top: 0;
  padding-bottom: 0;
  .navbar-contact {
    display: flex;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 40;
    margin-right: 1.2rem;
    padding-top: 0.2rem;
    border-bottom: rgba(0, 0, 0, 0.349);
    border-bottom-style: solid;

    .navbar-item {
      .icon {
        padding-right: 5px;
      }
      font-weight: bold;
      font-size: 0.95rem;
      color: rgb(216, 81, 39);
    }
  }
  .navbar-brand img {
    max-height: 4rem;
  }
  a.navbar-item {
    color: #585858;
    font-weight: bold;
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
