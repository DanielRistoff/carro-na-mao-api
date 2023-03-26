const express = require("express");
const controllerBrandModelYear = require("./controllers/BrandModelYearController");
const controllerKindOfService = require("./controllers/KindOfServiceController");
const controllerStickNote = require("./controllers/StickNoteController");
const controllerVehicle = require("./controllers/VehicleController");
const controllerVehicleStickNote = require("./controllers/VehicleStickNoteController");
const controllerBrand = require("./controllers/BrandController");
const controllerBrandModel = require("./controllers/BrandModelController");
const controllerPersonInformation = require("./controllers/PersonInformationController");
const controllerPersonVehicle = require("./controllers/PersonVehicleController");

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


routes.get("/v1/public/brand", controllerBrand.findAll);

routes.get("/v1/public/brand/:id", controllerBrand.findAllById);

routes.post("/v1/public/brand", controllerBrand.create);

routes.put("/v1/public/brand/:id", controllerBrand.update);

routes.delete("/v1/public/brand/:id", controllerBrand.delete);


routes.get("/v1/public/brand-model", controllerBrandModel.findAll);

routes.get("/v1/public/brand-model/:id", controllerBrandModel.findAllById);

routes.post("/v1/public/brand-model", controllerBrandModel.create);

routes.put("/v1/public/brand-model/:id", controllerBrandModel.update);

routes.delete("/v1/public/brand-model/:id", controllerBrandModel.delete);


routes.get("/v1/public/person-information", controllerPersonInformation.findAll);

routes.get("/v1/public/person-information/:id", controllerPersonInformation.findAllById);

routes.get("/v1/public/person-information/login", controllerPersonInformation.findAllById);

routes.get("/v1/public/person-information/login/:login", controllerPersonInformation.findAllByLogin);

routes.post("/v1/public/person-information", controllerPersonInformation.create);

routes.put("/v1/public/person-information/:id", controllerPersonInformation.update);

routes.delete("/v1/public/person-information:id", controllerPersonInformation.delete);


routes.get("/v1/public/person-vehicle", controllerPersonVehicle.findAll);

routes.get("/v1/public/person-vehicle/:id", controllerPersonVehicle.findAllById);

routes.post("/v1/public/person-vehicle", controllerPersonVehicle.create);

routes.put("/v1/public/person-vehicle/:id", controllerPersonVehicle.update);

routes.delete("/v1/public/person-vehicle:id", controllerPersonVehicle.delete);

module.exports = routes;
