<template>
  <section>
    <article class="container">
      <h2 class="text-center">Control de Grupo Familiar</h2>

      <hr class="pt-1" />
      <form
        @submit.prevent="actualizarFamiliar(familiarEditar)"
        v-if="editar"
        class="row g-3 needs-validation bg-primary"
        novalidate
      >
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">id</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="familiarEditar._id"
            placeholder="Nombre Propietario"
            required
          />
          <div class="valid-feedback">gFamiliar</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">nombre</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="familiarEditar.nombre"
            placeholder="ID Familiar"
            required
          />
          <div class="valid-feedback">Digite su ID</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="familiarEditar.apellido"
            placeholder="ID Familiar"
            required
          />
          <div class="valid-feedback">Digite sus Apellidos</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Parentesco</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="familiarEditar.parentesco"
            placeholder="Parentesco Familiar"
            required
          />
          <div class="valid-feedback">Digite Parentesco</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Cedula</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="familiarEditar.cedulaf"
            placeholder="Nombre Familiar"
            required
          />
          <div class="valid-feedback">Digite sus Documento.!</div>
        </div>
        <!-- fin Nombre -->
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Casa</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            v-model="familiarEditar.apellidos"
            placeholder="Casa propietarior"
            required
          />
          <div class="valid-feedback">Digite sus Casa!</div>
        </div>
        <!-- Fin Apellido -->

        <!-- Fin Usernmae -->
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Apartamento</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            v-model="familiarEditar.apartamento"
            placeholder="Apartamento Propietario"
            required
          />
          <div class="valid-feedback">Digite una cedula valida!</div>
        </div>
        <!--Fin cedula  -->
        <!-- Casa  -->

        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">Fecha</label>
          <input
            type="date"
            class="form-control"
            id="validationCustom05"
            placeholder="Fecha"
            v-model="familiarEditar.apartamento"
            required
          />
          <div class="invalid-feedback">Fecha</div>
        </div>
        <button
          type="submit"
          class="btn btn-warning btn-lg"
          title="Actualiar Familiar"
        >
          Editar
        </button>
      </form>
      <!-- Fin Editar Propietario -->

      <!-- inicio Agregar Gafamiliar ------------------->
      <form
        @submit.prevent="agregarFamiliar()"
        v-if="!editar"
        @click="editar = false"
        class="row g-3 needs-validation"
        novalidate
      >
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Propietario</label>
          <select
            class="form-select"
            id="validationCustom04"
            v-model="propgfEdit.propietario"
            required
          >
            <option
              selected
              disabled
              v-for="(itemgf, index) in propgfEdit"
              :key="index"
              :value="itemgf._id"
              >{{ itemgf.nombre }}</option
            >

            >
          </select>
          <div class="invalid-feedback">Digite un email Valido.</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Propietario</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="propietario.nombre"
            placeholder="Nombre Propietario"
            required
          />
          <div class="valid-feedback">Digite sus nombre.!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="propietario.nombre"
            placeholder="Apellidos Propietario"
            required
          />
          <div class="valid-feedback">Digite sus nombre.!</div>
        </div>
        <hr class="pt-2" />
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">id</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="gFamiliar.nombre"
            placeholder="ID Familiar"
            required
          />
          <div class="valid-feedback">Digite su ID.!</div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="propietario.nombre"
            placeholder="Nombre Familiar"
            required
          />
          <div class="valid-feedback">Digite sus nombre.!</div>
        </div>
        <!-- fin Nombre -->
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            v-model="propietario.apellidos"
            placeholder="Apellido Familiar"
            required
          />
          <div class="valid-feedback">Digite sus apellidos!</div>
        </div>
        <!-- Fin Apellido -->
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Paranetesco</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="gFamiliar.parentesco"
            placeholder="Parentesco Familiar"
            required
          />
          <div class="valid-feedback">Digite Parentesco</div>
        </div>

        <!-- Fin Usernmae -->
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Cedula</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            v-model="gFamiliar.cedulaf"
            placeholder="Cedula Familiar"
            required
          />
          <div class="valid-feedback">Digite una cedula valida!</div>
        </div>
        <!--Fin cedula  -->

        <!--Fin cedula  -->
        <!-- Casa  -->
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">Casa</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom05"
            placeholder="No. Casa"
            v-model="propietario.casa"
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
            v-model="propietario.apartamento"
            required
          />
          <div class="invalid-feedback">Digite el No Apartamento</div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">Fecha</label>
          <input
            type="date"
            class="form-control"
            id="validationCustom05"
            placeholder="Fecha"
            v-model="gFamiliar.date"
            required
          />
          <div class="invalid-feedback">Digite fecha</div>
        </div>

        <button
          type="submit"
          class="btn btn-success btn-lg"
          title="Agregar Propietario"
        >
          Agregar
        </button>
      </form>
      <hr class="pt-1" />
      <!-- Fin Apto  -->
      <!-- Tablas inf -->
      <h3 class="text-center">Listado de Grupo Familiar</h3>
      <table class="table table-dark table-striped pading-top">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Propietario</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">Parentesco</th>
            <th scope="col">CC/TI</th>
            <th scope="col">Casa</th>
            <th scope="col">Apto</th>
            <th scope="col">Fecha</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(fitem, index) in gFamiliar" :key="index">
            <th scope="row">{{ fitem._id }}</th>
            <td>{{ fitem.propietario }}</td>
            <td>{{ fitem.nombre }}</td>
            <td>{{ fitem.apellidos }}</td>
            <td>{{ fitem.parentesco }}</td>
            <td>{{ fitem.cedulaf }}</td>
            <td>{{ fitem.casa }}</td>
            <td>{{ fitem.apto }}</td>
            <td>{{ fitem.date }}</td>

            <td>
              <button
                type="button"
                @click="eliminarFamiliar(fitem._id)"
                class="btn btn-danger mx-1 "
                title="Eliminar Propietario"
              >
                Eliminar
              </button>
              <button
                type="button"
                @click="activarFamiliar(fitem._id)"
                class="btn btn-primary mx-1  "
                title="Editar Propietario"
              >
                Editar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Tablas inf -->

      <!-- Fin Tabla -->
    </article>
  </section>
</template>

<script>
export default {
  data() {
    return {
      //array principal
      //array vacio propietario
      //propietarios: [],
      propgfEdit: [],
      //array vacio gFamiliar
      gFamiliar: [],
      //alert
      text: "",
      propietario: {},
      //objeto para agregar familiar
      familiar: {
        nombre: "",
        apellidos: "",
        cedulaf: "",
      },
      editar: false,

      //objeto para traer elpropetario editado
      //se usa otro objeto para enviar el registro editado
      familiarEditar: {},
    };
  },
  created() {
    this.listarFamiliar();
    this.verEdit();
  },
  methods: {
    async listarFamiliar() {
      try {
        const res = await this.axios.get("/gfamiliar");
        this.gFamiliar = res.data;
        console.log(this.gFamiliar);
      } catch (e) {
        console.log(e.response);
        console.log(String(e));
      }
      // this.axios
      //   .get("/gFamiliar")
      //   .then((res) => {
      //     console.log(res.data);
      //     //grado los datos en el array gFamiliar
      //     this.gFamiliar = res.data;
      //   })
      //   .catch((e) => {
      //     console.log(e.response);
      //   });
    },
    agregarFamiliar() {
      this.axios
        .post("/gfamiliar-nuevo/", this.gFamiliar)
        .then((res) => {
          //console.log(this.propietario);
          const nombre_alert = this.gFamiliar.nombre;
          console.log(this.gFamiliar);

          this.gFamiliar.push(res.data);
          console.log(this.gFamiliar);
          this.familiar.nombre = "";
          this.familiar.apellidos = "";
          this.familiar.parentesco = "";
          this.familiar.cedulaf = "";
          this.console.log("Hola");
          this.text = `Familiar ${nombre_alert} Agregado con Exito`;
          this.alertaDisplay(this.text);
        })
        .catch((e) => {
          //console.log(e.response);
          console.log("sweetalert");
          this.text = "Los campos  no  pueden estar vacios";
          this.alertaDisplay(this.text);
          console.log(String(e));
        });
    },
    eliminarFamiliar(id) {
      this.text = " Familiar Eliminado";
      this.axios
        .delete(`/gfamiliar/${id}`)
        .then((res) => {
          const index = this.gFamiliar.findIndex(
            (item) => item._id === res.data._id
          );
          console.log("eliminado");
          this.gFamiliar.splice(index, 1);
          this.alertaDisplay(this.text);
        })
        .catch((e) => {
          console.log(e.response);
          console.log(String(e));
        });
    },
    //Alertas
    alertaDisplay(texto) {
      this.$swal(texto, "OK");
    },
    //Cargo el Propietario a editar
    async activarFamiliar(id) {
      try {
        this.text = "Familiar Actualizado";
        //activo el formulario editar
        this.editar = "true";
        const res = await this.axios.get(`/gfamiliar/${id}`);
        this.familiarEditar = res.data;
        console.log(this.familiarEditar);
      } catch (e) {
        console.log(e.response);
        console.log(String(e));
      }
    },
    async actualizarFamiliar(item) {
      try {
        const res = await this.axios.put(`/gfamiliar/${item._id}`, item);
        const index = await this.gFamiliar.findIndex(
          (n) => n._id === res.data._id
        );
        this.text = "Familiar Actualizado";
        console.log(index);
        this.gFamiliar[index]._id = res.data._id;
        this.gFamiliar[index].nombre = res.data.nombre;
        this.gFamiliar[index].apellidos = res.data.apellidos;
        this.gFamiliar[index].casa = res.data.casa;
        this.gFamiliar[index].cedulaf = res.data.apartamento;
        this.gFamiliar[index].parentesco = res.data.parentesco;
        this.gFamiliar[index].date = res.data.date;
        //asigno false a le bolean editar
        this.editar = false;
        this.alertaDisplay(this.text);
      } catch (e) {
        console.log(e.response);
        console.log(String(e));
      }
    },
    async buscarFamiliar(id) {
      try {
        //activo el formulario editar
        //this.editar = "true";
        const res = await this.axios.get(`/gfamiliar/${id}`);
        this.familiarEditar = res.data;
        this.text = `${res.data.nommbre}`;
        this.alertaDisplay(this.text);
      } catch (e) {
        console.log(e.response);
        console.log(String(e));
      }
    },
    async verGF(id) {
      try {
        const res = (await this.axios.get(`/gfamiliar/propietario/${id}`)).data;
        this.gFamiliar = res;
        // const data = {
        //   nombre: "Leo Messi",
        //   apellidos: "Ronaldo",
        //   documento: "123123123",
        //   cedulap: "14547454",
        //   parentesco: "hijo",
        //   propietario: id,
        // };
        //const responseData = (await this.axios.post("/gfamiliar-nuevo", data))
        //.data;
        console.log(this.gFamiliar);
      } catch (e) {
        console.log(e.response);
        console.log(String(e));
      }
    },
    async verEdit() {
      try {
        const res = await this.axios.get("/gfamiliar/propietario");
        this.propgfEdit = res;
        console.log(this.propgfEdit);
        console.log("Hola Aqui");
      } catch (e) {
        console.log(e.response);
        console.log(String(e));
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
/* .body {
  font-family: "Roboto", sans-serif;
} */
h3,
h2 {
  padding-top: 25px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 30px;
  color: white;
  font-weight: bold;
}
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
.color-container {
  background: #48588b;
  height: 18vh;
  margin-left: 255px;
}
</style>
