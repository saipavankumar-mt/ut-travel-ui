<template>
  <footer class="app-footer">
    <div class="footer-top columns">
      <div class="footer-section column has-text-left">
        <div class="columns is-multiline">
          <div class="footer-logo column is-full">
            <img src="../assets/footer-logo.png" alt="Footer Logo" />
          </div>
          <div class="footer-logo column is-full">
            <img src="../assets/footer-stamp.png" alt="Footer Stamp" />
          </div>
          <div class="footer-section social column is-full">
            <h3 class="footer-section-title column is-full">SOCIAL MEDIA</h3>
            <div class="footer-section-item">
              <a href="https://www.facebook.com/uttranchal.holidaysuh">
                <b-icon icon="facebook" size="is-small" />&nbsp;
              </a>
              <a href="https://www.youtube.com/channel/UCvguCwKOlVobZ3cpLr0J-jw">
                <b-icon icon="youtube" size="is-small" />&nbsp;
              </a>
            </div>
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
    <div class="footer-bottom columns"></div>
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
    .footer-logo {
      img {
        width: 60%;
      }
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
        a:hover {
          color: #47caf0;
          opacity: 1;
        }
        .label {
          opacity: 0.7;
          .icon {
            color: #f8f8f9;
            text-decoration: none;
          }
        }
      }
      &.social {
        .icon {
          font-size: 2rem;
          padding: 0 1.2rem 0 1.5rem;
        }
      }
    }
  }
  .footer-bottom {
    margin: 0 1.5rem !important;
    padding: 1.5rem 0;
  }
}
</style>
