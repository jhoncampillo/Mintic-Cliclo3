//GENERO LA RUTAS CON EXPRESS
import express, { Router } from "express";
const router = express.Router();

//AHORA IMPORTO EL MODELO
import Nota from "../models/nota";

//AGREGAR UNA nota -POST
router.post("/nota-nueva", async (req, res) => {
  //defino el documento
  //res = respuestas de parte del cliente
  //req= informacin del cleinte
  const body = req.body;
  try {
    const notaDB = await Nota.create(body);
    res.status(200).json(notaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un Error",
      error,
    });
  }
});

//RUTA GET
router.get("/nota/:id", async (req, res) => {
  //con el id busco en la base de datos
  const _id = req.params.id;
  try {
    const notaDB = await Nota.findOne({ _id });
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

router.get("/nota", async (req, res) => {
  try {
    const notaDB = await Nota.find();
    res.json(notaDB);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

// METODO DELETE
router.delete("/nota/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const notaDB = await Nota.findByIdAndDelete({ _id });
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
router.put("/nota/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    //envio la actualizcion con el id y el nuebo body del registro
    const notaDB = await Nota.findByIdAndUpdate(_id, body, { new: true });
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
