<template>
  <div class="about-us">
    <header class="about-us-header">
      <h1 class="main-title">About Us</h1>
      <p class="main-title-desc">
        Uttaranchal Holidays is a start-up that intends to make Uttaranchal more 'reachable' for travelers. It has been established to bring up the unexplored places of Uttaranchal in a more interesting way for those who
        are ready to spare a fraction of their routines for going on an adventurous and exciting journey.
      </p>
    </header>
    <section class="about-us-content">
      <app-profile-card
        v-for="(member, idx) in members.FOUNDER"
        :key="idx"
        :member="member"
        :is-founder="true"
      ></app-profile-card>
    </section>
    <header class="team-header">
      <h1 class="main-title">Our Team</h1>
    </header>
    <section class="marketing-team columns is-multiline">
      <div class="column is-half" v-for="(member, idx) in members.MARKETING" :key="idx">
        <app-profile-card :member="member" :is-marketing="true"></app-profile-card>
      </div>
    </section>
    <section class="operations-team columns is-multiline">
      <div class="column is-one-third" v-for="(member, idx) in members.OPERATIONS" :key="idx">
        <app-profile-card :member="member" :is-operations="true"></app-profile-card>
      </div>
    </section>
    <section class="operations-team columns is-multiline">
      <div class="column is-one-third" v-for="(member, idx) in members.TECHNICAL" :key="idx">
        <app-profile-card :member="member" :is-operations="true"></app-profile-card>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutUs',
  data() {
    return {
      members: {
        FOUNDER: [],
        MARKETING: [],
        OPERATIONS: [],
        TECHNICAL: []
      }
    };
  },
  created() {
    this.$http.get(`${process.env.BASE_URL}Data/aboutus.json`).then((res) => {
      res.data.map((response) => {
        this.members[response.key.toUpperCase()] = response.members;
      });
    });
  },
};
</script>

<style lang="scss">
.about-us {
  padding: 0 2.5rem;
  margin-bottom: 1rem;
  font: 16px/18px 'Lato', sans-serif;

  .about-us-header,
  .team-header {
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

  .operations-team {
    margin-top: 2rem !important;
    padding-top: 2rem;
    position: relative;
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      background: #47caf0;
      height: 2px;
      width: 6.5rem;
    }
  }
}
@media only screen and (min-width: 360px) and (max-width: 640px) { 
  .about-us {
    padding: 0 1.5rem;
    .main-title-desc {
      padding: 1.5rem !important;
      padding-bottom: 0 !important;
    }
  }
}
</style>
