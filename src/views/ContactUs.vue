<template>
  <div class="contact-us">
    <header class="contact-us-header">
      <h1 class="main-title">Contact Us</h1>
      <p class="main-title-desc">
      </p>
    </header>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactUs',
  data() {
    return {
      members: {
        FOUNDER: [],
        MARKETING: [],
        OPERATIONS: [],
        TECHNICAL: [],
      },
    };
  },
  created() {
    this.$http.get(`${process.env.BASE_URL}Data/contactus.json`).then((res) => {
      res.data.map((response) => {
        this.members[response.key.toUpperCase()] = response.members;
      });
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
}
@media only screen and (min-width: 360px) and (max-width: 640px) {
  .contact-us {
    padding: 0 1.5rem;
    .main-title-desc {
      padding: 1.5rem !important;
      padding-bottom: 0 !important;
    }
  }
}
</style>
