const PersonVehicle = require("../models/PersonVehicle");
const { logInfo } = require("../util/Logs");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      logInfo("PersonVehicleController", "findAll", "", "");
      const personVehicle = await PersonVehicle.findAll();
      const resp = res.json(personVehicle ? personVehicle : {});
      logInfo("PersonVehicleController", "findAll", "Success", personVehicle);
      return resp;
    } catch (erro) {
      logInfo("PersonVehicleController", "findAll", "Error", erro.message);
      return res.status(500).send({error: "Erro findAll (PersonVehicleController)"});
    }
  },

  async create(req, res) {
    try {
      logInfo("PersonVehicleController", "create", "body", req.body);
      const personVehicle = await PersonVehicle.create({
        person_information_id: req.body.person_information_id,
        vehicle_id: req.body.vehicle_id,
      });
      const resp = res.json(personVehicle ? personVehicle : {});
      logInfo("PersonVehicleController", "create", "Success", personVehicle);
      return resp;
    } catch (erro) {
      logInfo("PersonVehicleController", "create", "Error", erro.message);
      return res.status(500).send({error: "Erro create (PersonVehicleController)"});
    }
  },

  async update(req, res) {
    try {
      logInfo("PersonVehicleController", "update", "params", req.params);
      logInfo("PersonVehicleController", "update", "body", req.body);
      const personVehicle = await PersonVehicle.findByPk(req.params.id);
      if (personVehicle) {
        (personVehicle.person_information_id = req.body.person_information_id),
        (personVehicle.vehicle_id = req.body.vehicle_id),
        await personVehicle.save();
      }
      const resp = res.json(personVehicle ? personVehicle : {});
      logInfo("PersonVehicleController", "update", "Success", personVehicle);
      return resp;
    } catch (erro) {
      logInfo("PersonVehicleController", "update", "Error", erro.message);
      return res.status(500).send({error: "Erro na update (PersonVehicleController)"});
    }
  },

  async findAllById(req, res) {
    try {
      logInfo("PersonVehicleController", "findAllById", "params", req.params);
      const personVehicle = await PersonVehicle.findByPk(req.params.id);
      const resp = res.json(personVehicle ? personVehicle : {});
      logInfo("PersonVehicleController", "findAllById", "Success", personVehicle);
      return resp;
    } catch (erro) {
      logInfo("PersonVehicleController", "findAllById", "Error", erro.message);
      return res.status(500).send({error: "Erro findAllById (PersonVehicleController)"});
    }
  },

  async delete(req, res) {
    try {
      logInfo("PersonVehicleController", "delete", "params", req.params);
      const personVehicle = await PersonVehicle.findByPk(req.params.id);
      await personVehicle.destroy();
      const resp = res.json(personVehicle ? personVehicle : {});
      logInfo("PersonVehicleController", "delete", "Success", personVehicle);
      return resp;
    } catch (erro) {
      logInfo("PersonVehicleController", "delete", "Error", erro.message);
      return res.status(500).send({error: "Erro na delete (PersonVehicleController)"});
    }
  },
};
