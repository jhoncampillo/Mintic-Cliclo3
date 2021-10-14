<template>
  <section>
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <ol class="carousel-indicators">
          <li
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
        </ol>
        <div class="carousel-item active">
          <div class="container">
            <img
              src="../assets/carousel1.jpg"
              class="d-block w-100"
              alt="..."
            />
            <h1>Condominio 1</h1>
            <p>
              Unidad Residencia los Palos
            </p>
            <a href="#" class="btn btn-lg btn-primary"> Contacto </a>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <img
              src="../assets/carousel2.jpg"
              class="d-block w-100"
              alt="..."
            />
            <h1>Condomion Residencial Mocalo</h1>
            <p>
              Unidda Residencia Mocalo
            </p>
            <a href="#" class="btn btn-lg btn-primary"> Contacto </a>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
/* .body {
  font-family: "Roboto", sans-serif;
} */

section {
  /*background: url("../modules/shared/componentes/bg.jpg") no-repeat;*/
  background-color: #45ddd4;
  background: rgb(69, 221, 212);
  background: linear-gradient(
    90deg,
    rgba(69, 221, 212, 1) 0%,
    rgba(27, 101, 96, 0.865983893557423) 0%
  );
  background-position: center;
  background-size: cover;
  height: 79vh;
  transition: all 2s;
  margin-left: 255px;
  /* opacity: 0.4;*/
}
.carousel-item {
  height: 65rem;
  background: #777;
  color: #ffffff;
  position: relative;
}
.container {
  position: absolute;
  bottom: 0;
  top: 20px;
  left: 0;
  right: 0;
  padding-bottom: 50px;
}
</style>
