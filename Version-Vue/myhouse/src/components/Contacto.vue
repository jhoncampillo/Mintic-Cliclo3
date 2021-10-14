<template>
  <section>
    <form id="contactForm" class="contactForm">
      <h2>Envianos tu solictud</h2>
      <!-- Name input -->
      <div class="mb-2">
        <label class="form-label" for="name">Nombre</label>
        <input
          class="form-control"
          id="name"
          type="text"
          placeholder="Name"
          data-sb-validations="required"
        />
        <div class="invalid-feedback" data-sb-feedback="name:required">
          Nombre es reuqerido!
        </div>
      </div>

      <!-- Email address input -->
      <div class="mb-3">
        <label class="form-label" for="emailAddress">Correo Electronico</label>
        <input
          class="form-control"
          id="emailAddress"
          type="email"
          placeholder="Correo"
          data-sb-validations="required, email"
        />
        <div class="invalid-feedback" data-sb-feedback="emailAddress:required">
          Email Requerido!.
        </div>
        <div class="invalid-feedback" data-sb-feedback="emailAddress:email">
          Email no valido.
        </div>
      </div>

      <!-- Message input -->
      <div class="mb-3">
        <label class="form-label" for="message">Mensaje</label>
        <textarea
          class="form-control"
          id="message"
          type="text"
          placeholder="Mensaje"
          style="height: 10rem"
          data-sb-validations="required"
        ></textarea>
        <div class="invalid-feedback" data-sb-feedback="message:required">
          Mensaje Requerido.
        </div>
      </div>

      <!-- Form submissions success message -->
      <div class="d-none" id="submitSuccessMessage">
        <div class="text-center mb-3">Form submission successful!</div>
      </div>

      <!-- Form submissions error message -->
      <div class="d-none" id="submitErrorMessage">
        <div class="text-center text-danger mb-3">
          Error sending message!
        </div>
      </div>

      <!-- Form submit button -->
      <div class="text-center">
        <button class="btn btn-success btn-lg" type="submit">
          Enviar
        </button>
      </div>
    </form>
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
h1 {
  padding-top: 25px;
  font-family: "Roboto", sans-serif;
  text-align: center;
  font-size: 40px;
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

.contactForm {
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: auto;
  padding-top: 50px;
}
h2 {
  text-align: center;
}
</style>
