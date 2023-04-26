<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<template>
  <div class="card">
    <img :src="data.img" alt="rasm" class="card-img" />
    <div class="card-body">
      <h3 class="card-title">{{ data.title }}</h3>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempore
        architecto deserunt accusantium illo suscipit odit odio reiciendis
        alias, iste, laboriosam autem a.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 240px;
  box-shadow: 0 0 10px silver;
  &-body {
    padding: 12px;
  }
}
</style>
