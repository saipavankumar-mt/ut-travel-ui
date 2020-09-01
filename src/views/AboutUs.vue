<template>
  <section class="about-us hero is-light">
    <div class="hero-body">
      <div class="container">
        <h1 class="title">About Us</h1>
        <div class="content columns">
          <div class="column columns is-multiline">
            <div class="image column is-full">
              <img src="../assets/logo.png" alt="Profile" />
            </div>
            <div class="about column is-full">Uttranchal holidays</div>
          </div>
          <div class="column columns is-multiline">
            <div class="image column is-full">
              <img src="../assets/logo.png" alt="Profile" />
            </div>
            <div class="about column">Uttranchal holidays</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'AboutUs',
};
</script>

<style lang="scss">
.about-us {
  box-shadow: inset 0px 10px 10px -10px #7a7a7a,
    inset 0px -10px 10px -10px #b5b5b5;
  .content {
    .image img {
      width: 8rem;
      height: 8rem;
      border-radius: 5rem;
      margin: auto;
      background: #e8e8e8;
    }
  }
}
</style>
