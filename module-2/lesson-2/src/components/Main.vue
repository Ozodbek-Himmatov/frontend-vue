<script>
import Section from "./Section.vue";

export default {
  components: {
    Section,
  },
};
</script>

<template>
  <main>
    <Section text="INTRO 1" col="crimson" />
    <Section text="HERO 1" col="blue" />
  </main>
</template>

<style lang="scss">
main {
  min-height: calc(100vh - 70px - 70px);
}
</style>
