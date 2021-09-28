//Esquema a Modelo
import moongose from "mongoose";
const Schema = moongose.Schema;
//creo el Schema
const notaSchema = new Schema(
  {
    nombre: { type: String, required: [true, "Nombre Obligatorio"] },
    // si no es requeried no necesita typado  solo el tipo de dato
    apellidos: { type: String, required: [true, "Apellidos Obligatorio"] },
    usuarioID: String,
    cedula: { type: String, required: [true, "Cedula Obligatorio"] },
    ciudad: String,
    telefono: String,
    A_T: String,
    casa: String,
    apartamento: String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },
  },
  { collection: "Arrendatarios" }
);

//Ahora lo combierto a MODELO para luego utilizarllo en
//las rutas
//seguuido lo exporto
const ArrendatarioModel = moongose.model("Arrendatario", notaSchema);
export default ArrendatarioModel;
