<template>
  <div class="app-team">
    <article class="media profile">
      <div class="media-content">
        <div class="content" style="margin-right:20%">
          <p style="text-align:left">
            <strong>
              <i class="fas fa-user"></i>
              {{ member.name }}
            </strong>
            <br />
            <small>
              <i class="fas fa-map-marker-alt"></i>
              {{ member.location }}
            </small>
            <br />
            <small>
              <i class="fas fa-suitcase"></i>
              {{ member.designation }}
            </small>
            <br />
            <br />
            <small>{{ member.subtitle }}</small>
          </p>
        </div>
      </div>
      <div class="image-contianer">
        <figure class="image is-128x128">
          <img
            class="is-rounded"
            v-bind:src="require('../../assets/images/' + member.image)"
            alt="Image"
          />
        </figure>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "AppTeam",
  props: {
    member: { type: Object, required: true },
  },
  mounted() {
    console.log("hih");
    console.log("valu", this.member);
  },
};
</script>

<style lang="scss">
.theme-card {
  .profile-container {
    border-radius: 10px;
    margin: 16px;
  }
}

@media only screen and (max-width: 640px) and (min-width: 360px) {
}
</style>
