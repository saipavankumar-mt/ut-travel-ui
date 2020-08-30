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
                <p>Chardham Yatra</p>          
              </div>
              <div class="carousel-subtitle"><p>...Voice of Conscience</p></div>
              <div class="carousel-route"><p>Delhi – Haridwar – Yamunotri – Gangotri – Kedarnath – Badrinath – Rishikesh – Delhi</p></div>
              <div class="carousel-desc"><p>(Holy confluence, scenic surroundings and an aura of spiritual serenity make an ideal abode for the Gods and are a refreshing reward for the pilgrims who visit Chardham)</p></div>
            </div>
            <div class="carousel-right-content">
              <div class="carousel-duration"><p><b>11</b> Nights / <b>12</b> Days</p></div>
                <p>@</p>
                <div class="carousel-price"><p> &#8377; 41000/-</p></div>
                <div><p>PER PERSON</p></div>              
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
      carouselItem: [
        {
          image: "images/ChardhamYatra.png",
          textOverImage: "Slide 1",
          id: 1,
        },
        {
          image: "images/Haridwar.png",
          textOverImage: "Slide 2",
          id: 2,
        },
        {
          image: "images/Tiger.png",
          textOverImage: "Slide 3",
          id: 3,
        },
        {
          image: "images/parmarth.png",
          textOverImage: "Slide 4",
          id: 4,
        },
        {
          image: "images/LakshmanJhula.png",
          textOverImage: "Slide 5",
          id: 5,
        },
        {
          image: "images/trekking.png",
          textOverImage: "Slide 6",
          id: 6,
        },
      ],
    };
  },
  methods: {
    getImgUrl: function (path) {
      console.log(path);
      return require(path);
    },
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

.slide-ease {
  transition: 5s fade-in;
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

.carousel-content{
  display: flex;  
  width: 100%;
  height: 100%;  
  position: absolute;
  top:0%;
  left:0%;
  background-color: rgba(38,38,38, 0.6) !important;
  justify-content: space-between;
}

.carousel-left-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 80%;
  margin-left: 2.5%;
  justify-content: center;
}

.carousel-title{
  display: flex;
  justify-content: flex-start;
  font-family: 'Lucida Handwriting';
}

.carousel-title p {
  font-size: 4rem;
  color: white;
  width: max-content;
}

.carousel-subtitle{
  align-self: flex-end;
    p{
      color: yellow;
      font-size: 0.8rem;
    }
}

.carousel-route{  
  align-self: center;
  padding:0.2rem;
    p{
      color: rgb(200, 248, 27);
      font-size: 1rem;
    }
}

.carousel-desc{  
  align-self: center;
    p{
      color: #efbb20;
      font-size: 0.8rem;
    }
}

.carousel-right-content{
  top:0%;
  display: flex;
  color:white;
  flex-direction: column;
  width: 12.5%;
  height: fit-content;
  background: rgb(233, 88, 36);
  margin-right: 15%;
  border: white;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-style: solid;
}

.carousel-duration{
  padding:0.5rem;
  align-self: center;
  p{
    font-size: 2.1rem;
    font-family: "Brush Script MT";
  }
}

.carousel-price{
  padding: 0.5rem;
  p{
    border: none;
  border-radius: 40px 10px;
  background: #690404;
    font-size: 2.1rem;
    font-family: "Brush Script MT";    
  }
}

</style>
