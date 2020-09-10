<template>
  <div class="carousel">
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :loop="true"
      :navigationEnabled="true"
      :navigationNextLabel="'>'"
      :navigationPrevLabel="'<'"
      :paginationPosition="'bottom-overlay'"
    >
      <slide v-for="item in carouselItem" :key="item.id" :tabindex="item.id">
        <div class="carousel-container">
          <img
            class="carousel-img"
            v-bind:src="require('../assets/' + item.image)"
            v-bind:alt="item.image"
          />
          <div class="carousel-content">
            <div class="carousel-left-content">
              <div class="carousel-title">
                <p>{{ item.title }}</p>
              </div>
              <div class="carousel-subtitle">
                <p>{{ item.subtitle }}</p>
              </div>
              <div class="carousel-route">
                <p>{{ item.route }}</p>
              </div>
              <div class="carousel-desc">
                <p>{{ item.description }}</p>
              </div>
            </div>
            <div class="carousel-right-content" v-if="item.price.showPrice">
              <div class="carousel-duration">
                <p>
                  <b>{{ item.nights }}</b> Nights /
                  <b>{{ item.days }}</b> Days
                </p>
              </div><p>@</p>
                <div class="carousel-price">
                  <p>&#8377; {{ item.price.value }}/-</p>
                </div>
                <div class="carousel-perperson">
                  <p>PER PERSON</p>
                </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
export default {
  name: "TheCarousel",
  components: {
    Carousel,
    Slide,
  },
  data: function () {
    return {
      carouselItem: [],
    };
  },
  methods: {
    mobileCheck: function () {
      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
  },
  created() {
    this.$http
      .get(`${process.env.BASE_URL}Data/carousel.json`)
      .then((response) => {
        this.carouselItem = response.data.items;
      });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.VueCarousel-navigation-prev {
  left: 40px !important;
  font-size: 42px;
  outline: none !important;
  color: white !important;
  &:hover {
    font-weight: 800;
  }
}

.VueCarousel-navigation-next {
  right: 40px !important;
  font-size: 42px;
  outline: none !important;
  color: white !important;
  &:hover {
    font-weight: 800;
  }
}
.carousel-container {
  position: relative;
  width: 100%;
  left: 0%;
  height: 550px;
  top: 0%;
  img {
    object-fit: fill;
  }
}

.carousel-img {
  width: 100%;
  height: 550px;
}

.text {
  position: absolute;
  color: white;
  top: 25%;
  left: 25%;
}

.title {
  position: relative;

  .sub-title {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}

.carousel-content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  left: 0%;
  background-color: rgba(0, 0, 0, 0.4) !important;
  justify-content: space-between;
}

.carousel-left-content {
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // width: 50%;
  // height: 120%;
  // margin-left: 2.5%;
  // justify-content: center;
  padding-top: 15%;
  padding-left: 5%;
}

.carousel-title {
  display: flex;
  justify-content: flex-start;
  font-family: "SFProDisplay-Bold";
}

.carousel-title p {
  font-size: 3rem;
  color: white;
}

.carousel-subtitle {
  align-self: flex-end;
  p {
    color: yellow;
    font-size: 0.8rem;
  }
}

.carousel-route {
  align-self: center;
  padding: 0.2rem;
  p {
    color: rgb(200, 248, 27);
    font-size: 1rem;
  }
}

.carousel-desc {
  text-align: left;
  padding: 10px 40% 0 0;
  p {
    color: #efbb20;
    font-size: 0.8rem;
  }
}

.carousel-right-content {
  top: 0%;
  display: flex;
  color: white;
  flex-direction: column;
  width: 12.5%;
  height: fit-content;
  background: rgba(229, 78, 43, 0.2);
  margin-right: 15%;
  border: white;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
  border-radius: 0px 0px 1rem 1rem;
}

.carousel-duration {
  padding: 0.5rem;
  align-self: center;
  p {
    font-size: 2.1rem;
    font-family: "Brush Script MT";
  }
}

.carousel-price {
  padding: 0.5rem;
  p {
    border: none;
    //border-radius: 40px 10px;
    border-radius: 30px/10px;
    background: rgb(229, 78, 43);
    font-size: 2.1rem;
    font-family: "Brush Script MT";
  }
}

.carousel-perperson {
  padding-bottom: 2rem;
}

@media only screen and (min-width: 360px) and (max-width: 640px) {
  .carousel-slide {
  }

  .carousel-right-content {
    width: 25%;
    font-size: 18px;
  }

  .carousel-left-content {
    padding-left: 8%;
    padding-top: 45%;
  }

  .carousel-title {
    p {
      font-size: 2rem;
    }
  }

  .carousel-perperson {
    padding: unset;
    font-size: 18px;
  }

  .carousel-price {
    p {
      font-size: 18px;
    }
  }

  .carousel-desc {
    padding: 10px 0 0 0;
  }
  .carousel-duration {
    p {
      font-size: 18px;
    }
  }
}
</style>
