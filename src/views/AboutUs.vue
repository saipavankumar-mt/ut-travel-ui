<template>
  <div class="about-us">
    <div class="hero-body">
      <div>
        <div class="heading">
          <h1><span>About</span> Us</h1>
        </div>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          efficitur sit amet massa fringilla egestas. Nullam condimentum luctus
          turpis.
        </h5>
        <article class="media profile">
          <div class="media-left">
            <figure class="image is-256x256 ">
              <img
                class="is-rounded"
                src="../assets/images/aboutUs/picture1.jpeg"
                alt="Image"
              />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p style="text-align:left">
                <strong>Raj Kumar</strong>
                <small>@UttaranchalHolidays</small>
                <small>
                  <br />M. Rajkumar is a travel ethusiast who has an absolute
                  passion for exploring places around him. He is the one to
                  consult if you are stuck at place X in Uttaranchal and wanna
                  reach place Y via place z. If ever an 'Uttaranchal Awareness
                  quiz is held on the planet, he will be the undisputed winner
                  of the competition for he has immense knowledge about the
                  state. He holds an MBA degree from Gurukul Kangri University
                  and worked with Uttaranchal Government for sometime. However,
                  the desire to start a venture of his own sent him to pack bags
                  and jump into the battlefield of travel agents. <br />M.
                  Rajkumar has an extensive knowledge about Uttaranchal. He has
                  personally visited almost all the properties and places where
                  Uttaranchal Holidays accommodates its clients. This fact,
                  together with his hobby of exploring places makes him more
                  capable of handling issues guests are likely to face while
                  travelling. So, Uttaranchal Holidays isn't money-creating
                  machine for its operators but a vehicle to help people know
                  Uttaranchal more This competitive advantage gets reflected in
                  the services Uttaranchal Holidays provides I hope I have told
                  you enough about Uttaranchal Holidays Now is the time for you
                  to give us a chance to serve you. So, come and experience the
                  difference we claim to offer shd get a trip booked with
                  Uttaranchal Holidays.NOW
                </small>
              </p>
            </div>
          </div>
        </article>
        <section>
          <div>
            <div class="heading">
              <h1><span>Our</span> Team</h1>
            </div>
            <div>
              <header class="team-heading">
                <h1 class="title">Marketing Team</h1>
              </header>
            </div>

            <div class="columns is-multiline" size="is-medium">
              <div class="column is-one-third" v-for="index in 5" :key="index">
                <app-team></app-team>
              </div>
            </div>
          </div>
        </section>

        <!-- <section class="columns is-multiline" size="is-medium">
          <div class="column is-one-third" v-for="index in 10" :key="index">
            <div class="profile-container">
              <div class="profile">
                <div class="team-image">
                  <figure class="image is-256x256">
                    <img
                      src="../assets/images/aboutUs/picture1.jpeg"
                      alt="Image"
                    />
                  </figure>
                  <div class="member-skils">
                    <div class="overlay team-overlay"></div>
                    <div class="media-content">
                      <div class="content">
                        <p>
                          <strong>John Smith</strong>
                          <small>@johnsmith</small>
                          <small>31m</small>
                          <br />Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Aenean efficitur sit amet massa
                          fringilla egestas. Nullam condimentum luctus turpis.
                        </p>
                      </div>
                      <nav class="level is-mobile">
                        <div class="level-left">
                          <a class="level-item" aria-label="reply">
                            <span class="icon is-small">
                              <i class="fas fa-reply" aria-hidden="true"></i>
                            </span>
                          </a>
                          <a class="level-item" aria-label="retweet">
                            <span class="icon is-small">
                              <i class="fas fa-retweet" aria-hidden="true"></i>
                            </span>
                          </a>
                          <a class="level-item" aria-label="like">
                            <span class="icon is-small">
                              <i class="fas fa-heart" aria-hidden="true"></i>
                            </span>
                          </a>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'AboutUs',
};
</script>

<style lang="scss">
// .overlay {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
// }
// .team-image {
//   overflow: hidden;
//   display: block;

//   img {
//     border-radius: 10px;
//   }

//   // padding: 30px;
//   // background: transparent linear-gradient(to top, #4481eb 0, #04befe 100%) 0 0
//   //   no-repeat padding-box;
//   position: relative;
//   .member-skils {
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     z-index: 2;
//     opacity: 0;
//   }

//   &:hover {
//     .team-overlay {
//       z-index: -1;
//       background: #fff;
//       // opacity: 0.8;
//     }
//     // .overlay {
//     //   // opacity: 0.8;
//     // }
//     .member-skils {
//       top: 0;
//       opacity: 0.8;
//       transition: all 0.5s;
//     }
//   }
// }

.about-us {
  .column {
    padding-bottom: 60px;
    .is-rounded {
      filter: brightness(130%);
    }
  }
  font: 16px/18px 'Lato', sans-serif;
  font-weight: 600;
  color: #918f9b;

  .image-contianer {
    position: absolute;
    right: -57px;
    bottom: 48px;
    top: -53px;
  }
  h5 {
    font: 16px;
    color: #394048;
    padding: 0 20px 20px 20px;
    font-weight: 700;
    line-height: 1.2;
  }

  .team-heading {
    background: none !important;
    padding: 3rem 4rem;

    .title {
      font: 1.5rem/18px 'Lato', sans-serif;
      font-weight: 600;
      color: #60bff3;
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
  box-shadow: inset 0px 10px 10px -10px #7a7a7a,
    inset 0px -10px 10px -10px #b5b5b5;
  .client-about-us {
    display: flex;
  }
  .description {
    width: 100%;
    margin: 10px;
    background: white;
  }
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
  .image {
    // margin: auto;
  }

  .profile {
    height: 100%;
    -moz-box-shadow: 0 0 3px #ccc;
    -webkit-box-shadow: 0 0 3px #ccc;
    box-shadow: 0 0 3px #ccc;
    background: #fff;
    // border-radius: 10px;
  }

  .level {
    justify-content: center;
  }

  .media {
    padding: 20px;
    margin: 0 26px;
    position: relative;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
      0 0 0 1px rgba(10, 10, 10, 0.02);
    // color: #4a4a4a;
  }
}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .about-us {
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
      padding: unset !important;
    }
  }
}
</style>
