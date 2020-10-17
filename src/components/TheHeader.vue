<template>
  <nav class="navbar is-fixed-top" @click="initTab($event)">
    <div class="navbar-contact" v-show="!$isMobile()">
      <div class="navbar-item">
        <b-icon icon="email" size="is-small" />
        <p>{{contactDetails.email}}</p>
      </div>
      <div class="navbar-item">
        <b-icon icon="phone" size="is-small" />
        <p>{{contactDetails.mobileString(contactDetails.mobileArr)}}</p>
      </div>
    </div>
    <div class="navbar-brand">
      <span class="toggle-menu" v-if="$isMobile()" @click="toggleSideNavBar()">&#9776;</span>
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
    <div v-if="toggleNavbar" :class="{ overlay: toggleNavbar === true }">
      <div class="side-nav" :class="{ open: toggleNavbar === true }">
        <div class="top-bar">
          <div class="close-icon" @click="closeEvent">
            <i class="fas fa-arrow-left"></i>
          </div>

          <a class="mobile-icon">
            <img src="/img/logo.6f0ade75.png" alt="Uttaranchal holidays" />
          </a>
        </div>
        <router-link
          class="navbar-item"
          v-for="(navItem, idx) in navMenu"
          :to="navItem.path || '/'"
          exact
          :key="idx"
        >
          <div @click="toggleSideNavBar()">
            <b-icon :icon="navItem.icon" size="is-small" />&nbsp;
            <span>{{ navItem.label }}</span>
          </div>
        </router-link>
        <div class="navbar-contact">
          <div class="navbar-item">
            <b-icon icon="email" size="is-small" />
            <p> {{contactDetails.email}}</p>
          </div>
          <div class="navbar-item">
            <b-icon icon="phone" size="is-small" />
            <p> {{contactDetails.mobileString(contactDetails.mobileArr)}}</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {
      toggleNavbar: false,
      mobile: "reduce",
      navMenu: [
        { label: "Home", icon: "home", path: "/" },
        { label: "Tour Packages", icon: "bag-checked", path: "/tour-packages" },
        { label: "Destinations", icon: "map-marker", path: "/destinations" },
        { label: "Trekking", icon: "walk", path: "/trekking" },
        // { label: 'Hotel', icon: 'bed' },
        // { label: 'Car Rental', icon: 'car' },
        // { label: 'Helipad', icon: 'helicopter' },
        { label: "About Us", icon: "head-question", path: "/about-us" },
        { label: "Contact Us", icon: "card-account-phone", path: "/contact-us" },
      ],
      contactDetails: {
        email: 'sales@uttranchalholidays.com',
        mobileArr: ['+91-9359079393', '+91-9368079393', '+91-7830030003'],
        mobileString(nums) { return nums.join(', ')},
      },
    };
  },
  methods: {
    pathName(navItem) {
      const value = navItem.path.replace(/^\//, "");
      return value;
    },
    toggleSideNavBar: function () {
      this.toggleNavbar = !this.toggleNavbar;
      this.$emit("onToggle", this.toggleNavbar);
    },
    closeEvent: function () {
      this.toggleNavbar = false;
      this.$emit("onToggle", this.toggleNavbar);
    },
    initTab(event) {
      if (event.target.className === "overlay") {
        this.closeEvent();
      }
    },
  },
};
</script>

<style lang="scss">
.icon-arrow-thin-left:before {
  content: "\e97b";
}
.navbar {
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1), 0 0px 0 1px rgba(10, 10, 10, 0.02);
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
      font-family: "Roboto", sans-serif;
      font-size: 0.95rem;
      color: rgb(216, 81, 39);
    }
  }
  .navbar-brand img {
    max-height: 4rem;
  }
  a.navbar-item {
    color: #585858;
    font-family: "Lato", sans-serif;
    font-weight: 600;
    font-size: 1rem;
    align-self: flex-end;
    transition: all 0.2s ease-in;
    background: inherit !important;
    &.router-link-active {
      color: #47caf0;
    }
    .icon {
      padding-right: 5px;
    }
  }
  .navbar-brand {
    .toggle-menu {
      font-size: 30px;
      padding: 7px;
    }
  }
}
.open {
  width: 250px;
  padding: 10px;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.38);
  z-index: 2000;
  top: 0;
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;

  .side-nav {
    height: 100%;
    // width: 0;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: #fff;
    overflow-x: hidden;
    transition: 0.5s;

    .top-bar {
      display: flex;
      padding-bottom: 10px;

      .close-icon {
        padding: 5px 3px 0 5px;
        font-size: 24px;
      }
      .mobile-icon {
        img {
          width: 75%;
        }
      }
    }
  }

  a {
    text-decoration: none;
  }
  // .router-link-active {
  //   color: red !important;
  //   font-weight: bold;
  // }
  a.navbar-item {
    text-align: left;
  }
  .nav-item {
    cursor: pointer;
    list-style: none;
    padding: 8px 0;
  }

  .nav-link {
    font-size: 16px;
    color: var(--primary);
  }

  .nav-link:hover {
    color: var(--primary);
  }
}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .navbar {
    display: flex;
    // flex-direction: row-reverse;
    .navbar-brand {
      img {
        max-height: 3rem;
      }
    }
    .navbar-contact {
      flex-direction: column;
      position: unset;
      box-shadow: unset;
      margin-top: 1rem;
      border-top: 1px solid #bdbdbd;
      padding-top: .5rem;
      .navbar-item {
        font-size: 12px;
        padding: .25rem .5rem;
        display: flex;
      }
    }
  }
}
</style>
