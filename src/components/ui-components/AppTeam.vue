<template>
  <div class="app-team">
    <article class="media profile">
      <div class="media-content">
        <div class="content" style="margin-right: 20%">
          <p style="text-align: left">
            <strong>
              {{ member.name }}
            </strong>
            <br />
            <small>
              {{ member.location }}
            </small>
            <br />
            <small>
              {{ member.designation }}
            </small>
            <br />
            <br />
            <small>{{ member.description }}</small>
          </p>
        </div>
      </div>
      <div class="image-contianer">
        <figure class="image is-128x128">
          <img
            class="is-rounded"
            v-bind:src="require('../../assets/images/aboutUs/' + member.image)"
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
  mounted() {},
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
