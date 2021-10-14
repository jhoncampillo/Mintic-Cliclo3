//Esquema a Modelo
import moongose from "mongoose";
const Schema = moongose.Schema;

//creo el Schema
const propietarioSchema = new Schema(
  {
    nombre: { type: String, required: [true, "Nombre Obligatorio"] },
    // si no es requeried no necesita typado  solo el tipo de dato
    apellidos: { type: String, required: [true, "Apellidos Obligatorio"] },
    usuarioID: String,
    cedula: { type: String, required: [true, "Cedula Obligatorio"] },
    ciudad: String,
    telefono: String,
    email: String,
    casa: String,
    apartamento: String,
    tipo: String,
    tmascota: String,
    date: { type: Date, default: Date.now },
    activo: { type: Boolean, default: true },
  },
  { collection: "Propietarios_Arr" }
);

//Ahora lo combierto a MODELO para luego utilizarllo en
//las rutas
//seguuido lo exporto
const PropietarioModel = moongose.model("Propietarios_Arr", propietarioSchema);
export default PropietarioModel;
