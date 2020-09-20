<template>
  <div class="about-us">
    <div class="hero-body">
      <div class>
        <h1 class="title">About Us</h1>
        <article class="media profile">
          <div class="media-left">
            <figure class="image is-128x128">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
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
        </article>
        -->
        <section class="columns is-multiline" size="is-medium">
          <div class="column is-one-third" v-for="index in 10" :key="index">
            <div class="profile-container">
              <div class="profile">
                <div class="team-image">
                  <figure class="image is-256x256">                    
                  </figure>
                  <div class="member-skils">
                    <div class="overlay team-overlay"></div>
                    <!-- <div class="member-social-list"> -->
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
        </section>
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
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.team-image {
  overflow: hidden;
  display: block;

  img {
    border-radius: 10px;
  }

  .is-rounded {
    border: 2px solid white;
  }

  // padding: 30px;
  // background: transparent linear-gradient(to top, #4481eb 0, #04befe 100%) 0 0
  //   no-repeat padding-box;
  position: relative;
  .member-skils {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 0;
  }

  &:hover {
    .team-overlay {
      z-index: -1;
      background: #fff;
      // opacity: 0.8;
    }
    // .overlay {
    //   // opacity: 0.8;
    // }
    .member-skils {
      top: 0;
      opacity: 0.8;
      transition: all 0.5s;
    }
  }
}

.about-us {
  .media-content {
    background: white;
    margin: unset;
    padding: 1.5rem;
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
    margin: auto;
  }
  .profile-container {
    border-radius: 10px;
    margin: 16px;
  }
  .profile {
    height: 100%;
    // border: 1px solid #eee;
    background: #fff;
    // border-radius: 10px;
  }

  .level {
    justify-content: center;
  }

  .media {
    padding: 20px;
    margin: 0 26px;
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
