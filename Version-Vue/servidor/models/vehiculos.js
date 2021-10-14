//Esquema a Modelo
import moongose from "mongoose";
const Schema = moongose.Schema;

//creo el Schema
const condominioSchema = new Schema(
  {
    marca: { type: String, required: [true, "Marca Obligatorio"] },
    // si no es requeried no necesita typado  solo el tipo de dato
    placa: { type: String, required: [true, "Placa Obligatorio"] },
    cedulap: { type: String, required: [true, "Cedula Obligatoriop"] },
    date: { type: Date, default: Date.now },
  },
  { collection: "vehiculos" }
);

//Ahora lo combierto a MODELO para luego utilizarllo en
//las rutas
//seguido lo exporto
const vehiculosModel = moongose.model("Vehiculos", condominioSchema);
export default vehiculosModel;
