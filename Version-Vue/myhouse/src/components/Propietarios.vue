<template>
  <section>
    <article class="container">
      <h2 class="text-center">Control de Propietarios</h2>
      <h3 class="text-center">Arrendatarios-Temporales</h3>
      <hr class="pt-1" />
      <form
        @submit.prevent="actualizaPropietario(propietarioEditar)"
        v-if="editar"
        class="row g-3 needs-validation bg-primary"
        novalidate
      >
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Nombre</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            v-model="propietarioEditar.nombre"
            placeholder="Nombre Propietario"
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
            v-model="propietarioEditar.apellidos"
            placeholder="Nombre Propietario"
            required
          />
          <div class="valid-feedback">Digite sus apellidos!</div>
        </div>
        <!-- Fin Apellido -->
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label"
            >Usuario</label
          >
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              v-model="propietarioEditar.usuarioID"
              required
            />
            <div class="invalid-feedback">Digite sus Usuario.</div>
          </div>
        </div>
        <!-- Fin Usernmae -->
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Cedula</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            v-model="propietarioEditar.cedula"
            placeholder="Cedula Propietario"
            required
          />
          <div class="valid-feedback">Digite una cedula valida!</div>
        </div>
        <!--Fin cedula  -->
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">Ciudad</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="Ciudad"
            v-model="propietarioEditar.ciudad"
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
            v-model="propietarioEditar.telefono"
            required
          />
          <div class="invalid-feedback">Digite un telefono valido</div>
        </div>
        <!--Fin telefono  -->
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Tipo</label>
          <select
            class="form-select"
            id="validationCustom04"
            v-model="propietarioEditar.tipo"
            required
          >
            <option selected disabled value="">Selecciones...</option>
            <option>Propietario</option>
            <option>Arrendatrio</option>
            <option>Temporal</option>
          </select>
          <div class="invalid-feedback">Digite un email Valido.</div>
        </div>
        <!--Email  -->
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Email</label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Selecciones...</option>
            <option>gmail.com</option>
            <option>hotmail.com</option>
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
            v-model="propietarioEditar.casa"
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
            v-model="propietarioEditar.apartamento"
            required
          />
          <div class="invalid-feedback">Digite el No Apartamento</div>
        </div>
        <button
          type="submit"
          class="btn btn-warning btn-lg"
          title="Actualizar Propietario"
        >
          Editar
        </button>
      </form>
      <!-- Fin Editar Propietario -->

      <!-- inicio Agregar Propietario -->
      <form
        @submit.prevent="agregarPropietario()"
        v-if="!editar"
        @click="editar = false"
        class="row g-3 needs-validation"
        novalidate
      >
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Nombre</label>
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
        <!-- fin Nombre -->
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Apellidos</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            v-model="propietario.apellidos"
            placeholder="Nombre Propietario"
            required
          />
          <div class="valid-feedback">Digite sus apellidos!</div>
        </div>
        <!-- Fin Apellido -->
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label"
            >Usuario</label
          >
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input
              type="text"
              class="form-control"
              id="validationCustomUsername"
              aria-describedby="inputGroupPrepend"
              v-model="propietario.usuarioID"
              required
            />
            <div class="invalid-feedback">Digite sus Usuario.</div>
          </div>
        </div>
        <!-- Fin Usernmae -->
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Cedula</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom02"
            v-model="propietario.cedula"
            placeholder="Cedula Propietario"
            required
          />
          <div class="valid-feedback">Digite una cedula valida!</div>
        </div>
        <!--Fin cedula  -->
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">Ciudad</label>
          <input
            type="text"
            class="form-control"
            id="validationCustom03"
            placeholder="Ciudad"
            v-model="propietario.ciudad"
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
            v-model="propietario.telefono"
            required
          />
          <div class="invalid-feedback">Digite un telefono valido</div>
        </div>
        <!--Fin telefono  -->
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Tipo</label>
          <select
            class="form-select"
            id="validationCustom04"
            v-model="propietario.tipo"
            required
          >
            <option selected disabled value="">Seleccione...</option>
            <option>Propietarios</option>
            <option>Arrendatario</option>
            <option>Temporal</option>
          </select>
          <div class="invalid-feedback">Digite un email Valido.</div>
        </div>
        <!--Email  -->
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Email</label>
          <select
            class="form-select"
            id="validationCustom04"
            required
            v-model="propietario.email"
          >
            <option selected disabled value="">Choose...</option>
            <option>gmail.com</option>
            <option>hotmail.com</option>
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
        <button
          type="submit"
          class="btn btn-primary btn-lg"
          title="Agregar Propietario"
        >
          Agregar
        </button>
      </form>
      <hr class="pt-1" />
      <!-- Fin Apto  -->
      <!-- Tablas inf -->
      <h3 class="text-center">Listado de Propietarios</h3>
      <table class="table table-dark table-striped pading-top">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <!-- <th scope="col">Usuario</th> -->
            <th scope="col">CC/TI</th>
            <th scope="col">Casa</th>
            <th scope="col">Apto</th>
            <th scope="col">Telefono</th>
            <th scope="col">Ciudad</th>
            <th scope="col">Tipo</th>
            <th scope="col">Accion</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in propietarios" :key="index">
            <th scope="row">{{ item._id }}</th>
            <td>{{ item.nombre }}</td>
            <td>{{ item.apellidos }}</td>
            <!-- <td>{{ item.usaurioID }}</td> -->
            <td>{{ item.cedula }}</td>
            <td>{{ item.casa }}</td>
            <td>{{ item.apartamento }}</td>
            <td>{{ item.telefono }}</td>
            <td>{{ item.ciudad }}</td>
            <td>{{ item.tipo }}</td>
            <td>
              <button
                type="button"
                @click="eliminarPropietario(item._id)"
                class="btn btn-danger mx-1 "
                title="Eliminar Propietario"
              >
                Eliminar
              </button>
              <button
                type="button"
                @click="activarPropietario(item._id)"
                class="btn btn-primary mx-1  "
                title="Editar Propietario"
              >
                Editar
              </button>
              <button
                type="button"
                @click="verGF(item._id)"
                class="btn btn-primary mx-1 bg-info"
                title="Grupo Familiar"
              >
                Ver GF
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- Tablas inf -->
      <h3 class="text-center">Grupo Familiar</h3>
      <table class="table table-dark table-striped pading-top">
        <thead>
          <tr>
            <th scope="col">Propietario</th>
            <th scope="col">id</th>
            <th scope="col">Parentesco</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
            <th scope="col">CC/TI</th>
            <th scope="col">Casa</th>
            <th scope="col">Apartamento</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(itemgf, index) in gFamiliar" :key="index">
            <th scope="row">{{ itemgf.propietario }}</th>
            <td>{{ itemgf._id }}</td>
            <td>{{ itemgf.parentesco }}</td>
            <td>{{ itemgf.nombre }}</td>
            <td>{{ itemgf.apellidos }}</td>
            <td>{{ itemgf.cedulaf }}</td>
            <td>{{ itemgf.casa }}</td>
            <td>{{ itemgf.apartamento }}</td>
            <!-- <td>
              <button
                type="button"
                @click="eliminarfamiliar()"
                class="btn btn-danger mx-1 "
                title="Eliminar Propietario"
              >
                Eliminar
              </button>
              <button
                type="button"
                @click="activarGfamiliar()"
                class="btn btn-primary mx-1  "
                title="Editar Propietario"
              >
                Editar
              </button>
            </td> -->
          </tr>
        </tbody>
      </table>

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
      propietarios: [],
      //array vacio gFamiliar
      gFamiliar: [],
      //alert
      text: "",
      //objeto para agregar propietario
      propietario: {
        nombre: "",
        apellidos: "",
        usuarioID: "",
        cedula: "",
        ciudad: "",
        telefono: "",
        email: "",
        casa: "",
        tipo: "",
        apartamento: "",
      },
      editar: false,

      //objeto para traer elpropetario editado
      //se usa otro objeto para enviar el registro editado
      propietarioEditar: {},
    };
  },
  created() {
    this.listarPropietarios();
  },
  methods: {
    async listarPropietarios() {
      try {
        const res = await this.axios.get("/propietarios");
        this.propietarios = res.data;
      } catch (e) {
        console.log(e.response);
        console.log(String(e));
      }
      // this.axios
      //   .get("/propietarios")
      //   .then((res) => {
      //     console.log(res.data);
      //     //grado los datos en el array propietarios
      //     this.propietarios = res.data;
      //   })
      //   .catch((e) => {
      //     console.log(e.response);
      //   });
    },
    agregarPropietario() {
      this.axios
        .post("/propietarios-nuevo/", this.propietario)
        .then((res) => {
          //console.log(this.propietario);
          const nombre_alert = this.propietario.nombre;
          console.log(this.propietario);

          this.propietarios.push(res.data);
          console.log(this.propietario);
          this.propietario.nombre = "";
          this.propietario.apellidos = "";
          this.propietario.usuarioID = "";
          this.propietario.cedula = "";
          this.propietario.ciudad = "";
          this.propietario.telefono = "";
          this.propietario.tipo = "";
          this.propietario.casa = "";
          this.propietario.apartamento = "";
          console.log("Hola");
          this.text = `Propietario ${nombre_alert} Agregado con Exito`;
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
    eliminarPropietario(id) {
      this.text = "Item Eliminado";
      this.axios
        .delete(`/propietarios/${id}`)
        .then((res) => {
          const index = this.propietarios.findIndex(
            (item) => item._id === res.data._id
          );
          console.log("eleiminado");
          this.propietarios.splice(index, 1);
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
    async activarPropietario(id) {
      try {
        this.text = "Propietario Actualizado";
        //activo el formulario editar
        this.editar = "true";
        const res = await this.axios.get(`/propietarios/${id}`);
        this.propietarioEditar = res.data;
        console.log(this.propietarioEditar);
      } catch (e) {
        console.log(e.response);
        console.log(String(e));
      }
    },
    async actualizaPropietario(item) {
      try {
        const res = await this.axios.put(`/propietarios/${item._id}`, item);
        const index = await this.propietarios.findIndex(
          (n) => n._id === res.data._id
        );
        this.text = "Propietario Actualizado";
        console.log(index);
        this.propietarios[index].nombre = res.data.nombre;
        this.propietarios[index].apellidos = res.data.apellidos;
        this.propietarios[index].usuarioID = res.data.usuarioID;
        this.propietarios[index].cedula = res.data.cedula;
        this.propietarios[index].telefono = res.data.telefono;
        this.propietarios[index].casa = res.data.casa;
        this.propietarios[index].apartamento = res.data.apartamento;
        this.propietarios[index].ciudad = res.data.ciudad;
        this.propietarios[index].tipo = res.data.tipo;
        //asigno false a le bolean editar
        this.editar = false;
        this.alertaDisplay(this.text);
      } catch (e) {
        console.log(e.response);
        console.log(String(e));
      }
    },
    async buscarPropietario(id) {
      try {
        //activo el formulario editar
        //this.editar = "true";
        const res = await this.axios.get(`/propietarios/${id}`);
        this.propietarioEditar = res.data;
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
  height: auto;
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
