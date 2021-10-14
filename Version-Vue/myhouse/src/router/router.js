//Importo router
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/*webpackChunkName : "Home"*/ "../components/Home.vue"),
    props: true,
  },
  {
    path: "/:qsomos",
    name: "Quienes Somos",
    component: () =>
      import(/*webpackChunkName : "qsomos"*/ "../components/Qsomos.vue"),
    props: (route) => {
      console.log(route);
      return { qsomos: "JHON JAIRO CAMPILLO SERRATO", nombre: "dasdadasdasd" };
    },
  },
  {
    path: "/exito",
    name: "Casos de exito",

    component: () =>
      import(/*webpackChunkName : "Exito"*/ "../components/Exito.vue"),
    props: true,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: () =>
      import(/*webpackChunkName : "contacto"*/ "../components/Contacto.vue"),
    props: true,
  },
  {
    path: "/propietarios",
    name: "Propietarios",
    component: () =>
      import(
        /*webpackChunkName : "Propietarios"*/ "../components/Propietarios.vue"
      ),
    props: true,
  },
  {
    path: "/grupoFamiliar",
    name: "Grupo-Familiar",
    component: () =>
      import(
        /*webpackChunkName : "Arrendatarios"*/ "../components/GrupoFamiliar.vue"
      ),
    props: true,
  },
  {
    path: "/temporales",
    name: "Temporales",
    component: () =>
      import(
        /*webpackChunkName : "Temporales"*/ "../components/Temporales.vue"
      ),
    props: true,
  },
  {
    path: "/vehiculos",
    name: "Vehiculos",
    component: () =>
      import(/*webpackChunkName : "Temporales"*/ "../components/Vehiculos.vue"),
    props: true,
  },
  {
    path: "/login",
    name: "Login-User",
    component: () =>
      import(/*webpackChunkName : "Login"*/ "../components/login.vue"),
    props: true,
  },
];

//Creo el router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
