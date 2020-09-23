<template>
  <article
    class="profile-card"
    :class="{ 'founder': isFounder, 'marketing': isMarketing, 'operations': isOperations }"
  >
    <figure class="media-left image member-image">
      <img
        class="is-rounded"
        :src="require('../../assets/images/aboutus/' + member.image)"
        :alt="member.image"
      />
    </figure>
    <aside class="content has-text-left member-info">
      <div class="member-name">{{ member.name }}</div>
      <div class="member-designation">{{ member.designation }}</div>
      <div class="member-location">{{ member.location }}</div>
      <div class="member-desc">
        <p>{{member.description}}</p>
        <p v-if="member.description_extra">{{member.description_extra}}</p>
      </div>
    </aside>
  </article>
</template>

<script>
export default {
  name: 'AppProfileCard',
  props: {
    member: { type: Object, required: true },
    isFounder: { type: Boolean },
    isMarketing: { type: Boolean },
    isOperations: { type: Boolean },
  },
};
</script>

<style lang="scss">
.profile-card {
  display: flex;
  padding: 1.25rem;
  position: relative;
  border-radius: 4px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0px 0 1px rgba(10, 10, 10, 0.02);
  .member-image {
    height: 192px;
    width: 192px;
    padding: 0.5rem;
    background: #dbdbdb;
    border-radius: 290486px;
  }

  .member-info {
    border-left: 2px solid rgba(71, 202, 240, 0.25);
    padding-left: 2rem;
    margin-left: 1rem;
    .member-name {
      display: inline-block;
      color: #60bff3;
      font-weight: 600;
      font-size: 1.25rem;
      line-height: 24px;
      margin-bottom: 0.25rem;
    }

    .member-designation {
      display: inline-block;
      color: #918f9b;
      margin-bottom: 0.25rem;
      margin-left: 0.5rem;
      padding-left: 0.5rem;
      border-left: 2px solid rgba(71, 202, 240, 0.5);
    }

    .member-location {
      color: #918f9b;
      font-style: italic;
      font-size: 15px;
      margin-bottom: 1.5rem;
    }

    .member-desc {
      color: #918f9b;
      font-size: 15px;
      line-height: 21px;
    }
  }
  &.founder {
    margin: 0 1.75rem;
  }
  &.marketing {
    padding: 1rem;
    .member-image {
      width: 160px;
      height: 160px;
    }
    .member-info {
      padding-left: 1.75rem;
      margin-left: 0.75rem;
      .member-name {
        font-size: 1.125rem;
      }
    }
  }
  &.operations {
    padding: 0.75rem;
    .member-image {
      width: 128px;
      height: 128px;
    }
    .member-info {
      padding-left: 1rem;
      margin-left: 0.25rem;
      .member-name {
        font-size: 1rem;
      }
      .member-designation {
        font-size: 15px;
      }
    }
  }
}
</style>