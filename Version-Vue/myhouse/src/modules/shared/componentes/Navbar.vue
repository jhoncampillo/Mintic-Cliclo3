<template>
  <div>
    <!-- <input type="checkbox" name="" id="check" />
    <label for="check">
      <i class="fas fa-bars" id="btn"></i>
      <i class="fas fa-times" id="cancel"></i>
    </label> -->

    <div class="sidebar">
      <header>My House</header>
      <ul>
        <li>
          <router-link to="/"
            ><i class="fas fa-1x fa-home"></i>Home</router-link
          >
        </li>
        <li>
          <router-link to="/qsomos/"
            ><i class="fas fa-1x fa-id-card"></i>Quienes Somos</router-link
          >
        </li>
        <li>
          <router-link to="/exito"
            ><i class="fas fa-1x fas fa-medal"></i>Exito</router-link
          >
        </li>
        <li>
          <router-link to="/contacto"
            ><i class="fas fa-1x fa-envelope"></i>Contacto</router-link
          >
        </li>

        <li>
          <router-link to="/propietarios"
            ><i class="fas fa-1x fa-chess-king"></i>Propietarios</router-link
          >
        </li>
        <li>
          <router-link to="/grupoFamiliar"
            ><i class="fa fa-1x fa-users"></i>Grupo Familiar</router-link
          >
        </li>
        <li>
          <router-link to="/temporales"
            ><i class="fas fa-1x fa-hourglass-half"></i>Temporales</router-link
          >
        </li>
        <li>
          <router-link to="/vehiculos"
            ><i class="fas fa-1x fa-car"></i>Vehiculos</router-link
          >
        </li>
        <li>
          <a href=""><i class="fas fa-1x fa-dove"></i>Mascotas</a>
        </li>
        <li>
          <a href=""
            ><i class="fas fa-1x fa-globe-americas"></i>Areas comunes</a
          >
        </li>
        <li>
          <a href=""><i class="fas fa-1x fa-luggage-cart"></i>Inventarios</a>
        </li>
        <li>
          <a href=""><i class="fas fa-building"></i>Consejo Admon</a>
        </li>
        <li>
          <router-link to="/login"
            ><i class="fas  fa-2x fa-user-lock"></i>Login</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<i class="fa-solid fa-user-lock"></i>
<script>
//import Heder from "./Header.vue";
export default {
  title: "Home",
  props: {
    title: {
      title: String,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
/* .body {
  font-family: "Roboto", sans-serif;
} */

.sidebar {
  position: fixed;
  width: 250px;
  height: 100%;
  /*background: #042331;*/
  background: #48588b;
  /*transition: all 0.5s aese;*/
  font-family: "Roboto", sans-serif;
}
.sidebar header {
  font-size: 22px;
  color: white;
  text-align: center;
  line-height: 70px;
  background: #063146;
  user-select: none;
}
ul {
  list-style: none;
  padding: 0;
}
ul a {
  text-decoration: none;
}

.sidebar ul a {
  display: block;
  height: 100%;
  width: 100%;
  line-height: 65px;
  font-size: 20px;
  color: white;
  padding-left: 40px;
  box-sizing: border-box;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid black;
  transform: 0.4s;
}

ul li:hover a {
  padding-left: 50px;
  color: chartreuse;
}
.sidebar ul a i {
  margin-right: 16px;
}
/* #check {
  display: none;
}
label #btn,
label #cancel {
  position: absolute;
  cursor: pointer;
  background: #042331;
  border-radius: 3px;
}

label #btn {
  left: 40px;
  top: 25px;
  font-size: 35px;
  color: white;
  padding: 6px 12px;
  transition: all 0.5s;
}
label #cancel {
  z-index: 1111;
  left: -195px;
  top: 17px;
  font-size: 30px;
  color: #0a5275;
  padding: 4px 9px;
  transition: all 0.5s ease; */
/* }
#check:checked ~ .sidebar {
  left: 0;
} */
/* #check:checked ~ label #btn {
  left: 250px;
  opacity: 0;
  pointer-events: none;
}
#check:checked ~ label #cancel {
  left: 195px;
}
#check:checked ~ section {
  margin-left: 250px;
} */

section :hover {
  opacity: 2;
}
</style>
