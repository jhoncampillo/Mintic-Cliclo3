<template>
  <section>
    <article class="articulo ">
      <div class="container-fluid px-2 py-2">
        <div class="row gx-6">
          <div class="col">
            <div class="p-3 border bg-light">
              <h3>Custom column padding</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                natus quo esse, nulla libero laboriosam tempore est rerum,
                tenetur fugit exercitationem vero nostrum quas earum.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">
              <h3>Custom column padding</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                natus quo esse, nulla libero laboriosam tempore est rerum,
                tenetur fugit exercitationem vero nostrum quas earum.
              </p>
            </div>
          </div>
          <div class="col">
            <div class="p-3 border bg-light">
              <h3>Custom column padding</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                natus quo esse, nulla libero laboriosam tempore est rerum,
                tenetur fugit exercitationem vero nostrum quas earum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid d-flex py-5">
        <div class="col container-fluid">
          <h2 class="text-center">Estructura Interna</h2>
          <img
            src="../assets/organigrama.png"
            class="img-thumbnail"
            alt="Responsive image"
          />
        </div>

        <div class="col container  container-fluid">
          <h2 class="text-center">Generamos valor</h2>
          <img src="../assets/crecimiento.jpg" class="img-thumbnail" />
        </div>
      </div>
    </article>
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
  height: 100vh;
  transition: all 2s;
  margin-left: 255px;
  /* opacity: 0.4;*/
}
.img-thumbnail {
  width: 100%;
  height: 400px;
  object-fit: contain;
}
h3 {
  text-align: center;
}
</style>
