import { createApp } from "vue";
//import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

//import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Vue.config.productionTip = false;
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);

// import "bootstrap/dist/css/"
// import "bootstrap-vue/";

import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

import router from "./router/router.js";
createApp(App)
  .use(VueAxios, axios)
  .use(router)
  .use(VueSweetalert2, Swal)
  .mount("#app");
// ruta del servidor de node js
axios.defaults.baseURL = "http://localhost:3001/api";
