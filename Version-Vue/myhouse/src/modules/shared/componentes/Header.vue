<template>
  <div>
    <div class="color-container ">
      <h1>Administrador de Propiedad Horizontal</h1>
      <!-- <h1>{{ qsomos }}</h1> -->
      <h1>{{ this.$route.name }}</h1>

      <div class="menu-soc">
        <a href="/"><i class="fab fa-3x  fa-twitter"></i></a>
        <a href="/"><i class="fab fa-3x fa-facebook"></i></a>
        <a href="/"><i class="fab fa-3x fa-instagram-square"></i></a>
        <a href="/"><i class="fab  fa-3x fa-whatsapp-square"></i></a>
        <a href="/"><i class="fab fa-3x fa-youtube"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    qsomos: {
      type: String,
      required: true,
      default: "Quienes Somos XXX",
    },
  },
  data() {
    return {
      //qsomos: null,
    };
  },
  //ciclo de vida
  created() {
    //const { qsomos } = this.$route.params;
    // console.log(qsomos);
    // // //this.qsomos = qsomos;
    // console.log(this.$route);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
/* .body {
  font-family: "Roboto", sans-serif;
} */
h1 {
  padding-top: 15px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: bold;
}

.color-container {
  background: #48588b;
  height: 21vh;
  margin-left: 255px;
}

.menu-soc {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
  height: 50px;
  width: 100%;
}
.menu-soc a {
  cursor: pointer;
  font-size: 14px;
  padding-left: 30px;
  text-decoration: none;
  color: whitesmoke;
}
.menu-soc a:hover {
  text-decoration: underline;
}
</style>
