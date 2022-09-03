const Vehicle = require("../models/Vehicle");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      const vehicle = await Vehicle.findAll();
      return res.json(vehicle);
    } catch (erro) {
      return res.status(500).send({error: "Erro findAll (VehicleController)"});
    }
  },

  async create(req, res) {
    try {
      const vehicle = await Vehicle.create({
        board: req.body.board,
        cellphone: req.body.cellphone,
        vin: req.body.vin,
        brand_model_year_id: req.body.brand_model_year_id,
      });
      return res.json(vehicle);
    } catch (erro) {
      return res.status(500).send({error: "Erro create (VehicleController)"});
    }
  },

  async update(req, res) {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);
      if (vehicle) {
          (vehicle.board = req.body.board),
          (vehicle.cellphone = req.body.cellphone),
          (vehicle.vin = req.body.vin),
          (vehicle.brand_model_year_id = req.body.brand_model_year_id),
        await vehicle.save();
      }

      return res.json(vehicle);
    } catch (erro) {
      return res.status(500).send({error: "Erro update (VehicleController)"});
    }
  },

  async findAllById(req, res) {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);

      return res.json(vehicle);
    } catch (erro) {
      return res.status(500).send({error: "Erro findAllById (VehicleController)"});
    }
  },

  async delete(req, res) {
    try {
      const vehicle = await Vehicle.findByPk(req.params.id);
      await vehicle.destroy();
      return res.json(vehicle);
    } catch (erro) {
      return res.status(500).send({error: "Erro delete (VehicleController)"});
    }
  },
};
