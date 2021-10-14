//GENERO LA RUTAS CON EXPRESS
import express, { Router } from "express";
//AHORA IMPORTO EL MODELO
import gFamiliarModel from "../models/gfamiliar";
const router = express.Router();

//AGREGAR UNA nota -POST
router.post("/gfamiliar-nuevo", async (req, res) => {
  //defino el documento
  //res = respuestas de parte del cliente
  //req= informacin del cliente
  const body = req.body;
  try {
    const gFamiliar = await gFamiliarModel.create(body);
    res.status(200).json(gFamiliar);
  } catch (error) {
    console.log(String(error));
    return res.status(500).json({
      mensaje: "Ocurrio un Error",
      error,
    });
  }
});

//RUTA GET
router.get("/gfamiliar/:id", async (req, res) => {
  //con el id busco en la base de datos
  const _id = req.params.id;
  try {
    const gFamiliar = await gFamiliarModel.findOne({ _id });
    //respuesta
    res.status(200).json(gFamiliar);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

//GET PARA TODOS LOS DOCUMENTOS

router.get("/gfamiliar", async (req, res) => {
  try {
    const gFamiliar = await gFamiliarModel.find();
    res.status(200).json(gFamiliar);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

//GET PARA GRUPO FAMILIAR

// METODO DELETE
router.delete("/gfamiliar/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    const gFamiliar = await gFamiliarModel.findByIdAndDelete({ _id });
    //valido si existe
    if (!gFamiliar) {
      return res.status(404).json({
        mensaje: "No se encontro el Id Indicado",
      });
    }
    res.json(gFamiliar);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

//RUTA PUT O ACTUALIZACION
router.put("/gfamiliar/:id", async (req, res) => {
  const _id = req.params.id;
  const body = req.body;
  try {
    //envio la actualizcion con el id y el nuebo body del registro
    const gFamiliar = await gFamiliarModel.findByIdAndUpdate(_id, body, {
      new: true,
    });
    res.status(200).json(gFamiliar);
  } catch (error) {
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

//Metodo Get actualiza Grupo Familiar Y propietarios

router.get("/gfamiliar/propietario/:id", async (req, res) => {
  try {
    console.log("otro");
    // const id = req.params.id
    //const propietarioId = req.params.id
    const { id: propietarioId } = req.params;
    //Find:Buscar todos los documentos
    // const gFamiliar = await gFamiliarModel
    //   .find({ propietario: propietarioId })
    //   .populate("propietario");
    const gFamiliar = await gFamiliarModel.find({ propietario: propietarioId });
    res.status(200).json(gFamiliar);
  } catch (error) {
    console.log(String(error));
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

//get por id

router.get("/gfamiliar/propietario", async (req, res) => {
  try {
    console.log("herere");
    //const { id: propietarioId } = req.params;
    const gFamiliarEdit = await PropietarioModel.find();
    res.status(200).json(gFamiliarEdit);
    // const gFamiliar = await gFamiliarModel.find({ propietario: propietarioId });
    // res.status(200).json(gFamiliar);
  } catch (error) {
    console.log(String(error));
    return res.status(500).json({
      mensaje: "Ocurrio un error",
      error,
    });
  }
});

//
//LUEGO EXPORTO  LA CONFIGURACION DE EXPRESS
module.exports = router;
