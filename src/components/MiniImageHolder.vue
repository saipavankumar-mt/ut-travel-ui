<template>
  <div class="mini-img-container">
    <img
      class="mini-img"
      v-bind:src="require('../assets/' + Item.image)"
      v-bind:alt="Item.image"
    />
    <div class="mini-img-text">{{ Item.title }}</div>
  </div>
</template>
<script>
export default {
  name: 'MiniImageHolder',
  components: {},
  data: function() {
    return {
      Item: {
        image: 'ChardamPackage/YamunotriDham.jpg',
        title: 'Jai Yamuna Maa',
      },
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mini-img-container {
  position: absolute;
  width: 150px;
  height: 150px;
  display: grid;
}

.mini-img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.mini-img-text {
  color: rgb(88, 88, 88);
  font-weight: bold;
}
</style>
