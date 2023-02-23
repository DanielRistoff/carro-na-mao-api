const Vehicle = require("../models/Vehicle");
const { logInfo } = require("../util/Logs");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      logInfo("VehicleController", "findAll", "", "");
      const vehicle = await Vehicle.findAll();
      const resp = res.json(vehicle ? vehicle : {});
      logInfo("VehicleController", "findAll", "Success", vehicle);
      return resp;
    } catch (erro) {
      logInfo("VehicleController", "findAll", "Error", erro.message);
      return res.status(500).send({error: "Erro findAll (VehicleController)"});
    }
  },

  async create(req, res) {
    try {
      logInfo("VehicleController", "create", "body", req.body);
      const vehicle = await Vehicle.create({
        board: req.body.board,
        current_mileage: req.body.current_mileage,
        average_monthly_mileage: req.body.average_monthly_mileage,
        vin: req.body.vin,
        brand_model_year_id: req.body.brand_model_year_id,
        creation_date: req.body.creation_date,
        update_date: req.body.update_date,
      });
      const resp = res.json(vehicle ? vehicle : {});
      logInfo("VehicleController", "create", "Success", vehicle);
      return resp;
    } catch (erro) {
      logInfo("VehicleController", "create", "Error", erro.message);
      return res.status(500).send({error: "Erro create (VehicleController)"});
    }
  },

  async update(req, res) {
    try {
      logInfo("VehicleController", "update", "params", req.params);
      logInfo("VehicleController", "update", "body", req.body);
      const vehicle = await Vehicle.findByPk(req.params.id);
      if (vehicle) {
        (vehicle.board = req.body.board),
        (vehicle.current_mileage = req.body.current_mileage),
        (vehicle.average_monthly_mileage = req.body.average_monthly_mileage),
        (vehicle.vin = req.body.vin),
        (vehicle.brand_model_year_id = req.body.brand_model_year_id),
        (vehicle.creation_date = req.body.creation_date),
        (vehicle.update_date = req.body.update_date),
        await vehicle.save();
      }
      const resp = res.json(vehicle ? vehicle : {});
      logInfo("VehicleController", "update", "Success", vehicle);
      return resp;
    } catch (erro) {
      logInfo("VehicleController", "update", "Error", erro.message);
      return res.status(500).send({error: "Erro update (VehicleController)"});
    }
  },

  async findAllById(req, res) {
    try {
      logInfo("VehicleController", "findAllById", "params", req.params);
      const vehicle = await Vehicle.findByPk(req.params.id);
      const resp = res.json(vehicle ? vehicle : {});
      logInfo("VehicleController", "findAllById", "Success", vehicle);
      return resp;
    } catch (erro) {
      logInfo("VehicleController", "findAllById", "Error", erro.message);
      return res.status(500).send({error: "Erro findAllById (VehicleController)"});
    }
  },

  async delete(req, res) {
    try {
      logInfo("VehicleController", "delete", "params", req.params);
      const vehicle = await Vehicle.findByPk(req.params.id);
      await vehicle.destroy();
      const resp = res.json(vehicle ? vehicle : {});
      logInfo("VehicleController", "delete", "Success", vehicle);
      return resp;
    } catch (erro) {
      logInfo("VehicleController", "delete", "Error", erro.message);
      return res.status(500).send({error: "Erro delete (VehicleController)"});
    }
  },
};
