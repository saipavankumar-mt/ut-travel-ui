<template>
  <div class="about-us">
    <div>
      <div class="heading">
        <h1>
          <span>About</span> Us
        </h1>
      </div>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
        efficitur sit amet massa fringilla egestas. Nullam condimentum luctus
        turpis.
      </h5>
      <article class="media profile" v-for="(item, idx) in founder" :key="idx">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              class="is-rounded"
              v-bind:src="require('../assets/images/' + item.image)"
              alt="Image"
            />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p style="text-align:left">
              <strong>
                <i class="fas fa-user"></i>
                {{ item.name }}
              </strong>
              <br />
              <span>
                <i class="fas fa-map-marker-alt"></i>
                {{ item.location }}
              </span>
              <br />

              <span>
                <i class="fas fa-suitcase"></i>
                {{ item.designation }}
              </span>
              <br />

              <span>
                <br />M. Rajkumar is a travel ethusiast who has an absolute
                passion for exploring places around him. He is the one to
                consult if you are stuck at place X in Uttaranchal and wanna
                reach place Y via place z. If ever an 'Uttaranchal Awareness
                quiz is held on the planet, he will be the undisputed winner of
                the competition for he has immense knowledge about the state. He
                holds an MBA degree from Gurukul Kangri University and worked
                with Uttaranchal Government for sometime. However, the desire to
                start a venture of his own sent him to pack bags and jump into
                the battlefield of travel agents.
                <br />M. Rajkumar has an
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
                shd get a trip booked with Uttaranchal Holidays.NOW
              </span>
            </p>
          </div>
        </div>
      </article>
      <section>
        <div>
          <div class="heading">
            <h1>
              <span>Our</span> Team
            </h1>
          </div>
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
import AppTeam from "../components/ui-components/AppTeam.vue";
export default {
  name: "AboutUs",
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
      res.data.map((response) => {
        if (response.key === "Founder") {
          this.founder = response.members;
        }
        if (response.key === "Marketing") {
          this.marketing = response.members;
        }
        if (response.key === "Operations") {
          this.operations = response.members;
        }
      });
    });
  },
};
</script>

<style lang="scss">
.about-us {
  padding: 0 2rem;
  font: 16px/18px "Lato", sans-serif;
  font-weight: 600;
  color: #918f9b;
  box-shadow: inset 0px 10px 10px -10px #7a7a7a,
    inset 0px -10px 10px -10px #b5b5b5;

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
    font-weight: 700;
    line-height: 1.2;
    color: #60bff3;
  }

  .team-heading {
    background: none !important;
    padding: 4rem;

    .title {
      font: 1.5rem/18px "Lato", sans-serif;
      font-weight: 600;
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

  .media {
    padding: 20px;
    margin: 0 26px;
    position: relative;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.02);

    min-height: 210px;

    // color: #4a4a4a;
  }
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
