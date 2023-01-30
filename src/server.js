const express = require("express");
const api = express();
const routes = require("./router");

api.use(express.json());
api.use(routes);

api.listen(4201);

console.log("Aplicativo rodando na porta 4200")