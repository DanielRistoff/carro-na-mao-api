const express = require("express");
const controllerBrandModelYear = require("./controllers/BrandModelYearController");
const controllerKindOfService = require("./controllers/KindOfServiceController");
const controllerStickNote = require("./controllers/StickNoteController");
const controllerVehicle = require("./controllers/VehicleController");
const controllerVehicleStickNote = require("./controllers/VehicleStickNoteController");

const routes = express.Router();

routes.get("/v1/public/brand-model-year", controllerBrandModelYear.findAll);

routes.get("/v1/public/brand-model-year/:id", controllerBrandModelYear.findAllById);

routes.post("/v1/public/brand-model-year", controllerBrandModelYear.create);

routes.put("/v1/public/brand-model-year/:id", controllerBrandModelYear.update);

routes.delete("/v1/public/brand-model-year/:id", controllerBrandModelYear.delete);


routes.get("/v1/public/kind-of-servicer", controllerKindOfService.findAll);

routes.get("/v1/public/kind-of-servicer/:id", controllerKindOfService.findAllById);

routes.post("/v1/public/kind-of-servicer", controllerKindOfService.create);

routes.put("/v1/public/kind-of-servicer/:id", controllerKindOfService.update);

routes.delete("/v1/public/kind-of-servicer/:id", controllerKindOfService.delete);


routes.get("/v1/public/stick-note", controllerStickNote.findAll);

routes.get("/v1/public/stick-note/status/:status", controllerStickNote.findAllByStatus);

routes.get("/v1/public/stick-note/:id", controllerStickNote.findAllById);

routes.post("/v1/public/stick-note", controllerStickNote.create);

routes.put("/v1/public/stick-note/:id", controllerStickNote.update);

routes.delete("/v1/public/stick-note/:id", controllerStickNote.delete);


routes.get("/v1/public/vehicle", controllerVehicle.findAll);

routes.get("/v1/public/vehicle/:id", controllerVehicle.findAllById);

routes.post("/v1/public/vehicle", controllerVehicle.create);

routes.put("/v1/public/vehicle/:id", controllerVehicle.update);

routes.delete("/v1/public/vehicle/:id", controllerVehicle.delete);


routes.get("/v1/public/vehicle-stick-note", controllerVehicleStickNote.findAll);

routes.get("/v1/public/vehicle-stick-note/:id", controllerVehicleStickNote.findAllById);

routes.post("/v1/public/vehicle-stick-note", controllerVehicleStickNote.create);

routes.put("/v1/public/vehicle-stick-note/:id", controllerVehicleStickNote.update);

routes.delete("/v1/public/vehicle-stick-note/:id", controllerVehicleStickNote.delete);

module.exports = routes;
