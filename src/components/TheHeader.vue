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
        <a class="navbar-item" v-for="(navItem, idx) in navMenu" :key="idx">
          <b-icon :icon="navItem.icon" size="is-small" />&nbsp;
          <span>{{navItem.label}}</span>
        </a>
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
        { label: 'Home', icon: 'home' },
        { label: 'Tour Packages', icon: 'bag-checked' },
        { label: 'Destinations', icon: 'map-marker' },
        { label: 'Trekking', icon: 'walk' },
        { label: 'Hotel', icon: 'bed' },
        { label: 'Car Rental', icon: 'car' },
        { label: 'Helipad', icon: 'helicopter' },
        { label: 'About Us', icon: 'head-question' },
        { label: 'Contact Us', icon: 'card-account-phone' },
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
    margin-right: 20px;
    margin-top: 5px;
    .navbar-item {
      .icon {
        padding-right: 5px;
      }
      font-weight: bold;
      font-size: 0.95rem;
      color: rgb(216, 81, 39)  ;
    }
  }
  .navbar-brand img {
    max-height: 4rem;
  }
  a.navbar-item {
    color: rgba(19, 18, 18, 0.7);
    font-weight: bold;
    font-size: 1rem;
    align-self: flex-end;
    &:hover {
      text-decoration: none;
      text-decoration-color: white;
      background: inherit;
    }
    transition: all .3s ease-in;
    .icon {
        padding-right: 5px;
    }
  }
}
</style>