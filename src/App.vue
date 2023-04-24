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
    padding: 0;
    margin: 0;
    width: 100%;
  }
</style>

<!-- <style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-rows: 120px calc(100vh - 220px) 100px;
}
</style> -->
