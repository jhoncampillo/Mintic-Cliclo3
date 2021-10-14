//Creacion de configuraciopn
// const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const path = require("path");

//Despues de Instalar babel ya no suso const si no import
import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const databaseName = "Condominios";
const app = express();

//*******************************conexion base de datos
const mongoose = require("mongoose");
// const uri = "mongodb://localhost:27017/Condominios";
//const uri = `mongodb+srv://campillojh:%24%24Iw0yrm200%24%24@mintic2022.bwgim.mongodb.net/${databaseName}?authSource=admin&replicaSet=atlas-9ugpky-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
const uri = `mongodb+srv://campillojh:i3VzaTAoXvfQ8ruY@mintic2022.bwgim.mongodb.net/${databaseName}?authSource=admin&replicaSet=atlas-9ugpky-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };

/*
O com promesas
**ready to use . the mongoose.connect() promise resolves to mongoose instance */
mongoose.connect(uri, options).then(
  () => {
    console.log("Conectado a DB Condiminios");
  },
  //Conncetion error
  (err) => {
    console.log(err);
  }
);
// const { MongoClient } = require("mongodb");
// const uri =
//   "mongodb+srv://campillojh:%24%24Iw0yrm200%24%24@mintic2022.bwgim.mongodb.net/test?authSource=admin&replicaSet=atlas-9ugpky-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// console.log("Conetado Atlas");
// client.connect((err) => {
//   console.log(err);
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//***********************Fin conexio Base de Datos

//*************************middleware***************
app.use(morgan("tiny"));
//npminicia ekl server
app.use(cors());
//JSON - urlencode
app.use(express.json());
//permite trabajar con solictudes x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//

//RUTAS
// app.get("/", function (req, res) {
//   res.send("Hola Mundo");
// });
app.use("/api", require("./routes/Propietarios"));
app.use("/api", require("./routes/gfamiliar"));
app.use("/api", require("./routes/vehiculos"));

//FIN RUTAS
//HISTORY VUE
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(path.join(__dirname, "public")));

//PUERTO- PRUEBA INICIAL
// app.listen(3000, function () {
//   console.log("servidor por el puerto 3000");
// });

//ASIGNAR PUERTO AUTOMATICO - por defecto el 300 si no el que este libre
app.set("puerto", process.env.PORT || 3001);
app.listen(app.get("puerto"), function () {
  console.log("ejemplo de escucha on puerto " + app.get("puerto"));
});
