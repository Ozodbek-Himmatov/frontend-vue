<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    col: String,
  },
};
</script>

<template>
  <section class="intro" :style="'background-color:' + col">
    <div class="container">
      <h1 class="text-center">{{ text }}</h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.intro {
  min-height: 100vh;
  background-color: coral;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
