<template>
  <div class="contact-us">
    <header class="contact-us-header">
      <h1 class="main-title">Contact Us</h1>
    </header>
    <section class="columns is-multiline contact-us-body">
      <div
        class="column is-full"
        v-for="contact in contacts"
        :key="contact.type"
      >
        <div class="has-text-weight-bold is-size-5 mb-3">
          {{ contact.typeDesc }} :
        </div>
        <div class="is-size-7">
          <div class="mb-1">{{ contact.address }}</div>
          <div class="mb-1">
            <span v-if="contact.mobile">
              Mobile# {{ contact.mobile.code }} -
              {{ contact.mobile.numbers.join(', ') }}
            </span>
            <span v-if="contact.phone">
              Phone# {{ contact.phone.code }} -
              {{ contact.phone.numbers.join(', ') }}
            </span>
          </div>
          <div class="mb-1" v-if="contact.email">
            Email : {{ contact.email }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactUs',
  data() {
    return {
      contacts: [],
    };
  },
  created() {
    this.$http.get(`${process.env.BASE_URL}Data/contactus.json`).then((res) => {
      this.contacts = res.data;
    });
  },
};
</script>

<style lang="scss">
.contact-us {
  padding: 0 2.5rem;
  margin-bottom: 1rem;
  font: 16px/18px 'Lato', sans-serif;

  .contact-us-header {
    font-family: 'Lato', sans-serif;
    padding-top: 3rem;
    padding-bottom: 1.5rem;
    color: #3e3f54;

    .main-title {
      font-size: 36px;
      font-weight: 600;
      line-height: 48px;

      &:after {
        content: ' ';
        display: block;
        position: absolute;
        left: 50%;
        width: 6.5rem;
        height: 2px;
        margin: 10px auto 0;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        background: #47caf0;
      }
    }

    .main-title-desc {
      width: 1000px;
      max-width: 100%;
      margin: auto;
      padding: 1.5rem 3rem 0;
      line-height: 21px;
    }
  }

  .contact-us-body {
    color: #3e3f54;
    padding: 2rem 0;
  }
}
@media only screen and (min-width: 360px) and (max-width: 640px) {
  .contact-us {
    padding: 0 1.5rem;
    .main-title-desc {
      padding: 1.5rem !important;
      padding-bottom: 0 !important;
    }
    .contact-us-body {
      padding: 1rem 0;
    }
  }
}
</style>
