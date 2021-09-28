//GENERO LA RUTAS CON EXPRESS
import express, { Router } from "express";
//AHORA IMPORTO EL MODELO
import ArrendatarioModel from "../models/Arrendatarios";
const router = express.Router();

//AGREGAR UNA nota -POST
router.post("/arrendatarios-nuevo", async (req, res) => {
  //defino el documento
  //res = respuestas de parte del cliente
  //req= informacin del cliente
  const body = req.body;
  try {
    const notaDB = await ArrendatarioModel.create(body);
    res.status(200).json(notaDB);
  } catch (error) {
    console.log(String(error));
    return res.status(500).json({
      mensaje: "Ocurrio un Error",
      error,
    });
  }
});

//RUTA GET
router.get("/propietarios/:id", async (req, res) => {
  //con el id busco en la base de datos
  const _id = req.params.id;
  try {
    const notaDB = await ArrendatarioModel.findOne({ _id });
    //respuesta
    res.json(notaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

//GET PARA TODOS LOS DOCUMENTOS

router.get("/propietarios", async (req, res) => {
  try {
    const notaDB = await ArrendatarioModel.find();
    res.json(notaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// METODO DELETE
router.delete("/propietarios/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const notaDB = await ArrendatarioModel.findByIdAndDelete({ _id });
    //valido si existe
    if (!notaDB) {
      return res.status(404).json({
        mensaje: "No se encontro el Id Indicado",
      });
    }
    res.json(notaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

//RUTA PUT O ACTUALIZACION
router.put("/propietarios/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    //envio la actualizcion con el id y el nuebo body del registro
    const notaDB = await ArrendatarioModel.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.json(notaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

//LUEGO EXPORTO  LA CONFIGURACION DE EXPRESS
module.exports = router;
