<template>
  <footer class="app-footer">
    <div class="footer-top columns">
      <div class="footer-section column has-text-left">
        <div class="columns is-multiline">
          <div class="footer-logo column is-full">
            <img src="../assets/footer-logo.png" alt="Footer Logo" />
          </div>
          <div class="footer-stamp column is-full">
            <img src="../assets/footer-stamp.png" alt="Footer Stamp" />
          </div>
          <h3 class="footer-section-title column is-full">CONNECT WITH US</h3>
          <div class="footer-section-item column is-full">
            <a href="https://www.facebook.com/uttranchal.holidaysuh" target="_blank">
              <img class="social-icon" src="../assets/icons/facebook.png" alt="facebook">
            </a>
            <a href="https://www.youtube.com/channel/UCvguCwKOlVobZ3cpLr0J-jw" target="_blank">
              <img class="social-icon" src="../assets/icons/youtube.png" alt="youtube">
            </a>
            <a href="">
              <img class="social-icon" src="../assets/icons/twitter.png" alt="twitter">
            </a>
            <a href="https://instagram.com/uttranchalholidays?igshid=1qzdghaej98oz">
              <img class="social-icon" src="../assets/icons/instagram.png" alt="instagram">
            </a>
          </div>
        </div>
      </div>
      <div class="footer-section column has-text-left">
        <div class="columns is-multiline">
          <h3 class="footer-section-title column is-full">PACKAGES WE OFFER</h3>
          <div
            class="footer-section-item column is-full"
            v-for="(item, idx) in footerSectionPackages"
            :key="idx"
          >
            <a>{{item.label}}</a>
          </div>
        </div>
      </div>
      <div class="footer-section column has-text-left">
        <div class="columns is-multiline">
          <h3 class="footer-section-title column is-full">OUR SERVICES</h3>
          <div
            class="footer-section-item column is-full"
            v-for="(item, idx) in footerSectionServices"
            :key="idx"
          >
            <a>{{item.label}}</a>
          </div>
        </div>
      </div>
      <div class="footer-section column has-text-left">
        <div class="columns is-multiline">
          <h3 class="footer-section-title column is-full">CONTACT US</h3>
          <div
            class="footer-section-item column is-full"
            v-for="(contact, idx) in contactUs"
            :key="idx"
          >
            <p class="label">
              <b-icon :icon="contact.icon" size="is-small" />&nbsp;
              <span>{{contact.label}}</span>
            </p>
            <p>{{contact.value}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom columns">
      <div class="footer-section-item column has-text-centered has-text-white is-size-7">
        Copyright © <router-link to="/">Uttranchal Holidays 2021</router-link>. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'TheFooter',
  data() {
    return {
      footerSectionPackages: [
        {
          label: 'Beautiful Kumaon',
          route: '',
        },
        {
          label: 'Garhwal Glimpse',
          route: '',
        },
        {
          label: 'Magnificent Garhwal',
          route: '',
        },
        {
          label: 'Complete Uttaranchal',
          route: '',
        },
        {
          label: 'Kumaon Heritage',
          route: '',
        },
        {
          label: 'Real Adventure',
          route: '',
        },
        {
          label: 'Scenic Uttaranchal',
          route: '',
        },
      ],
      footerSectionServices: [
        {
          label: 'Trekking',
          route: '',
        },
        {
          label: 'Hotel',
          route: '',
        },
        {
          label: 'Car Rental',
          route: '',
        },
        {
          label: 'Helicopter',
          route: '',
        },
      ],
      contactUs: [
        {
          label: 'Address',
          value:
            'Arya Nagar Chowk, Jwalapur, Haridwar, Uttarakhand - 249407 (India)',
          icon: 'map-marker-outline',
        },
        {
          label: 'Call Us',
          value: '+91-9368079393, +91-9359079393, +91-7217219393',
          icon: 'phone-outline',
        },
        {
          label: 'WhatsApp',
          value: '+91-9368079393, +91-9359079393, +91-7830030003',
          icon: 'whatsapp',
        },
        {
          label: 'Mail Us',
          value: 'sales@uttranchalholidays.com',
          icon: 'email-outline',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.app-footer {
  background-color: rgb(57, 64, 72);
  .footer-top {
    margin: 0 1.5rem !important;
    padding: 1.5rem 0;
    border-bottom: 1px solid rgba(248, 248, 249, 0.2);
    .footer-logo img {
      width: 60%;
    }
    .footer-stamp img {
      width: 50%;
    }
    .footer-section {
      h3.footer-section-title {
        color: #fff;
        text-transform: uppercase;
        font-weight: 600;
        padding-bottom: 1.5rem;
      }
      .footer-section-item {
        padding-top: 0;
        p,
        a {
          color: #f8f8f9;
          opacity: 0.5;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
        }
        // a:hover {
        //   color: #47caf0;
        //   opacity: 1;
        // }
        .label {
          opacity: 0.7;
          .icon {
            color: #f8f8f9;

            text-decoration: none;
          }
        }
        .social-icon {
          color: #fff;
          padding-right: 5px;
        }
      }
    }
  }
  .footer-bottom {
    margin: 0 1.5rem !important;
    padding: 1rem 0;
    .footer-section-item {
      padding: 0;
    }
  }
}
@media only screen and (max-width: 640px) and (min-width: 360px) {
  .footer-stamp {
    display: none;
  }
  .footer-section {
    text-align: center !important;
  }
  .footer-bottom {
    margin: 0 .75rem !important;
  }
}
</style>
