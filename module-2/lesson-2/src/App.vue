<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
import { arr } from "./db/user";
import Card from "./UI/Card.vue";
export default {
  data() {    
    return {
      number: 0,
      array: arr,
    };
  },
  components: {
    Header,
    Main,
    Footer,
    Card,
  },
  mounted() {
    console.log(arr);
  },
};
</script>

<template>
  <Header />
  <main>
    <div class="wrapper">
      <Card v-for="el in this.array" :data="el" :key="el.id" />
    </div>
  </main>
  <Footer />
</template>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  .wrapper {
    display: flex;
    gap: 50px;
    justify-content: center;
    padding-top: 50px;
  }
}
</style>
