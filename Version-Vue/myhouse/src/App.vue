<template>
  <Navbar />
  <Header />
  <router-view />
</template>

<script>
//import Home from "./components/Home.vue";
//import Qsomos from "./components/Qsomos.vue";
import { defineAsyncComponent } from "vue";
export default {
  name: "App",
  components: {
    Navbar: defineAsyncComponent(() =>
      import(
        /*webpackChunkName: "Navbar"*/ "./modules/shared/componentes/Navbar.vue"
      )
    ),
    Header: defineAsyncComponent(() =>
      import(
        /*webpackChunkName: "Header"*/ "./modules/shared/componentes/Header.vue"
      )
    ),
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;*/
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
</style>
