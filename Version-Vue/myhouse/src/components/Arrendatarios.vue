<template>
  <section>
    <article class="container">
      <h2 class="text-center">Control de Arrendatarios/Temporales</h2>
      <form class="row g-3 needs-validation" novalidate>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label"
            >Nombre Arrendatario</label
          >
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            value=""
            placeholder="Nombre Arrendatario"
            required
          />
          <div class="valid-feedback">Digite sus nombre.!</div>
        </div>
        <!-- fin Nombre -->
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label"
            >Apellidos Arrendatario</label
          >
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            value=""
            placeholder="Apellidos Arrendatario"
            required
          />
          <div class="valid-feedback">Digite sus apellidos!</div>
        </div>
        <!-- Fin Apellido -->

        <!-- Fin Usernmae -->
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Cedula</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            value=""
            placeholder="Documento de identidad"
            required
          />
          <div class="valid-feedback">Digite una cedula valida!</div>
        </div>
        <!--Fin cedula  -->
        <div class="col-md-4">
          <label for="validationCustom03" class="form-label">Ciudad</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="Ciudad"
            required
          />
          <div class="invalid-feedback">Digite una ciudad valida.</div>
        </div>
        <!--Fin cedula  -->
        <!--Telefono  -->
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">Telefono</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            placeholder="Telefono"
            required
          />
          <div class="invalid-feedback">Digite un telefono valido</div>
        </div>
        <!--Fin telefono  -->
        <!--A/T  -->
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">A/T</label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option>Arrendarario</option>
            <option>Temporal</option>
          </select>
          <div class="invalid-feedback">Selecione tipo arrandatario</div>
        </div>
        <!-- F A/T  -->
        <!--Email  -->
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Email</label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Seleccione...</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">Digite un email Valido.</div>
        </div>
        <!-- Fin Email  -->
        <!-- Casa  -->
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">Casa</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            placeholder="No. Casa"
            required
          />
          <div class="invalid-feedback">Digite el No de la Casa.</div>
        </div>
        <!-- Fin Casa  -->
        <!-- Apto  -->
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">Apto</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            placeholder="No. Apto"
            required
          />
          <div class="invalid-feedback">Digite el No de la Casa.</div>
        </div>
      </form>
      <hr class="pt-1" />
      <!-- Fin Apto  -->
      <!-- Tablas inf -->
      <h3 class="text-center">Grupo Familiar Arrendatario</h3>
      <table class="table table-dark table-striped pading-top">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Parentesco</th>
            <th scope="col">Nombre</th>
            <th scope="col">CC/TI</th>
            <th scope="col">Casa/Apto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Hijo</td>
            <td>Juan Sierra</td>
            <td>124578</td>
            <td>Casa No.48</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Esposa</td>
            <td>Lorena Lopez</td>
            <td>45785122</td>
            <td>Casa No.08</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Hija</td>
            <!-- <td colspan="2">Larry the Bird</td> -->
            <td>Juliana Lopez</td>
            <td>4525478</td>
            <td>Casa No.23</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>empleada</td>
            <td>Ana Pena</td>
            <td>4471112</td>
            <td>Casa No.01</td>
          </tr>
        </tbody>
      </table>

      <!-- Fin Tabla -->

      <div class="col-12  d-flex justify-content-center">
        <button class="btn btn-primary btn-lg mx-4" type="submit">
          Crear
        </button>
        <button class="btn btn-secondary btn-lg mx-4" type="submit">
          Consultar
        </button>
        <button class="btn btn-success btn-lg mx-4" type="submit">
          Modificar
        </button>
        <button class="btn btn-warning btn-lg mx-4" type="submit">
          Borrar
        </button>
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
  height: 80vh;
  transition: all 2s;
  margin-left: 255px;
  /* opacity: 0.4;*/
}
</style>
