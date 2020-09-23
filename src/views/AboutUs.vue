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
      <article class="media about-founder" v-for="(item, idx) in founder" :key="idx">
        <div class="media-left has-text-left member-info ">
          <figure class="image member-image">
            <img
              :src="require('../assets/images/aboutus/' + item.image)"
              :alt="item.image"
            />
          </figure>
          <div class="member-name">{{ item.name }}</div>
          <div class="member-designation">{{ item.designation }}</div>
          <div class="member-location">{{ item.location }}</div>
        </div>
        <div class="media-content content has-text-left member-desc ">
          <p>
            M. Rajkumar is a travel ethusiast who has an absolute
            passion for exploring places around him. He is the one to
            consult if you are stuck at place X in Uttaranchal and wanna
            reach place Y via place z. If ever an 'Uttaranchal Awareness
            quiz is held on the planet, he will be the undisputed winner of
            the competition for he has immense knowledge about the state. He
            holds an MBA degree from Gurukul Kangri University and worked
            with Uttaranchal Government for sometime. However, the desire to
            start a venture of his own sent him to pack bags and jump into
            the battlefield of travel agents.
          </p>
          <p>
            M. Rajkumar has an
            extensive knowledge about Uttaranchal. He has personally visited
            almost all the properties and places where Uttaranchal Holidays
            accommodates its clients. This fact, together with his hobby of
            exploring places makes him more capable of handling issues
            guests are likely to face while travelling. So, Uttaranchal
            Holidays isn't money-creating machine for its operators but a
            vehicle to help people know Uttaranchal more This competitive
            advantage gets reflected in the services Uttaranchal Holidays
            provides I hope I have told you enough about Uttaranchal
            Holidays Now is the time for you to give us a chance to serve
            you. So, come and experience the difference we claim to offer
            shd get a trip booked with Uttaranchal Holidays NOW
          </p>
        </div>
      </article>
    </section>
    <header class="about-us-header">
      <h1 class="main-title">Our Team</h1>
    </header>
    <div>
      <section>
        <div>
          <div>
            <header class="team-heading">
              <h1 class="title">Marketing Team</h1>
            </header>
          </div>
          <div class="columns is-multiline" size="is-medium">
            <div class="column is-one-third" v-for="(item, idx) in marketing" :key="idx">
              <app-team :member="item"></app-team>
            </div>
          </div>
        </div>
      </section>
      <section>
        <header class="team-heading">
          <h1 class="title">Operation Team</h1>
        </header>
        <div class="columns is-multiline" size="is-medium">
          <div class="column is-one-third" v-for="(item, idx) in operations" :key="idx">
            <app-team :member="item"></app-team>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import AppTeam from '../components/ui-components/AppTeam.vue';
export default {
  name: 'AboutUs',
  components: {
    AppTeam,
  },
  data() {
    return {
      marketing: [],
      founder: [],
      operations: [],
    };
  },
  created() {
    this.$http.get(`${process.env.BASE_URL}Data/aboutus.json`).then((res) => {
      console.log(res.data);
      res.data.map((response) => {
        if (response.key === 'Founder') {
          this.founder = response.members;
        }
        if (response.key === 'Marketing') {
          this.marketing = response.members;
        }
        if (response.key === 'Operations') {
          this.operations = response.members;
        }
      });
    });
  },
};
</script>

<style lang="scss">
.about-us {
  padding: 0 2.5rem;
  font: 16px/18px 'Lato', sans-serif;

  .about-us-header {
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

  .media {
    padding: 1.25rem;
    margin: 0 1.5rem;
    position: relative;
    border-radius: 4px;
    box-shadow: 0.5em 0.5em 1em 0.125em rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.02);

    &.about-founder {
      .member-info {
        position: relative;

        &:after {
          content: ' ';
          display: block;
          position: absolute;
          top: 0;
          right: -2rem;
          width: 2px;
          height: 100%;
          background: rgba(145, 143, 155, 0.25);
        }

        .member-image {
          height: 192px;
          width: 192px;
          margin-bottom: 1rem;
          >img {
            border-radius: 4px;
          }
        }

        .member-name {
          color: #3e3f54;
          font-weight: 600;
          font-size: 1.25rem;
          line-height: 24px;
          margin-bottom: .25rem;
        }

        .member-designation {
          color: #918f9b;
          margin-bottom: .25rem;
        }

        .member-location {
          font-style: italic;
          font-size: 15px;
          color: #918f9b;
        }
      }

      .member-desc {
        color: #918f9b;
        font-size: 15px;
        line-height: 21px;
        padding-left: 2rem;
      }
    }
  }

  strong {
    color: #60bff3;
  }
  .columns {
    padding: unset !important;
    .column {
      padding-bottom: 60px;
      .is-rounded {
        filter: brightness(100%);
      }
    }
  }

  .image.is-128x128 {
    height: 168px;
    width: 168px;
  }
  .image-contianer {
    position: absolute;
    right: -57px;
    bottom: 48px;
    top: -53px;
  }
  h5 {
    font: 16px;
    padding: 0 180px 20px 180px;
    // font-weight: 700;
    line-height: 1.2;
    color: #60bff3;
  }

  .team-heading {
    background: none !important;
    padding: 4rem;

    .title {
      font: 1.5rem/18px 'Lato', sans-serif;
      // font-weight: 600;
      color: #3e3f54;
      text-align: left;
    }
  }

  .heading {
    h1 {
      color: #3b404b;
      font-family: SFProDisplay-Bold;
      font-size: 50px;
      line-height: 60px;
      padding-top: 40px;
      text-transform: capitalize;
      padding-bottom: 16px;

      span {
        color: rgb(96, 191, 243);
      }
    }
  }
  .media-content {
    background: white;
    margin: unset;
    // padding: 1.5rem;
  }
  // background: cadetblue;

  .client-about-us {
    display: flex;
  }
  // .description {
  //   width: 100%;
  //   margin: 10px;
  //   background: white;
  // }
  .client-about-us,
  .content {
    background: white;
    .image img {
      width: 8rem;
      height: 8rem;
      border-radius: 5rem;
      margin: auto;
      background: #e8e8e8;
    }
  }

  .profile {
    height: 100%;
    -moz-box-shadow: 0 0 3px #ccc;
    -webkit-box-shadow: 0 0 3px #ccc;
    box-shadow: 0 0 3px #ccc;
    background: #fff;
    // border-radius: 10px;
  }

  // .media {
  //   padding: 20px;
  //   margin: 0 26px;
  //   position: relative;
  //   background-color: #fff;
  //   border-radius: 6px;
  //   box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
  //     0 0 0 1px rgba(10, 10, 10, 0.02);
  //   min-height: 210px;
  // }
}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .about-us {
    h5 {
      padding: unset;
      padding-bottom: 30px;
    }
    .media {
      display: flex;
      flex-direction: column;
      margin: auto;

      .media-left {
        margin: auto;
      }
    }
  }

  .media-content {
    .content {
      text-align: center;
      background: white;
    }
  }

  .columns {
    padding: 1rem 0 !important;
    .column {
      // padding: unset !important;
    }
  }
}
</style>
