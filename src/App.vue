<template>
  <!-- <vueNavigationBar :options="navigationData" /> -->
  <Navbar />
  <router-view />
</template>

<script>
// import Header from "./components/common/Header.vue";
// import vueNavigationBar from "vue-navigation-bar/src/vue-navigation-bar.vue";
import Navbar from './components/common/Navbar.vue'

export default {
  name: "App",
  components: {
    // Header,
    Navbar
  },
};
</script>

<style>
  #app {
    padding: 2rem 0 0 0;
    margin: 0 auto;
    width: 100%;
  }
</style>