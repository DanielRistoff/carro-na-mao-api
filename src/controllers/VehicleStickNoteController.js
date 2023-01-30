const VehicleStickNote = require("../models/VehicleStickNote");
const { logInfo } = require("../util/Logs");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      logInfo("VehicleStickNoteController", "findAll", "", "");
      const vehicleStickNote = await VehicleStickNote.findAll();
      const resp = res.json(vehicleStickNote ? vehicleStickNote : {});
      logInfo("VehicleStickNoteController", "findAll", "Success", vehicleStickNote);
      return resp;
    } catch (erro) {
      logInfo("VehicleStickNoteController", "findAll", "Error", erro.message);
      return res.status(500).send({error: "Erro findAll (VehicleStickNoteController)"});
    }
  },

  async create(req, res) {
    try {
      logInfo("VehicleStickNoteController", "create", "body", req.body);
      const vehicleStickNote = await VehicleStickNote.create({
        vehicle_id: req.body.vehicle_id,
        stick_note_id: req.body.stick_note_id,
      });
      const resp = res.json(vehicleStickNote ? vehicleStickNote : {});
      logInfo("VehicleStickNoteController", "create", "Success", vehicleStickNote);
      return resp;
    } catch (erro) {
      logInfo("VehicleStickNoteController", "create", "Error", erro.message);
      return res.status(500).send({error: "Erro create (VehicleStickNoteController)"});
    }
  },

  async update(req, res) {
    try {
      logInfo("VehicleStickNoteController", "update", "params", req.params);
      logInfo("VehicleStickNoteController", "update", "body", req.body);
      const vehicleStickNote = await VehicleStickNote.findByPk(req.params.id);
      if (vehicleStickNote) {
          (vehicleStickNote.vehicle_id = req.body.vehicle_id),
          (vehicleStickNote.stick_note_id = req.body.stick_note_id),
        await vehicleStickNote.save();
      }
      const resp = res.json(vehicleStickNote ? vehicleStickNote : {});
      logInfo("VehicleStickNoteController", "update", "Success", vehicleStickNote);
      return resp;
    } catch (erro) {
      logInfo("VehicleStickNoteController", "update", "Error", erro.message);
      return res.status(500).send({error: "Erro update (VehicleStickNoteController)"});
    }
  },

  async findAllById(req, res) {
    try {
      logInfo("VehicleStickNoteController", "update", "params", req.params);
      const vehicleStickNote = await VehicleStickNote.findByPk(req.params.id);
      const resp = res.json(vehicleStickNote ? vehicleStickNote : {});
      logInfo("VehicleStickNoteController", "findAllById", "Success", vehicleStickNote);
      return resp;
    } catch (erro) {
      logInfo("VehicleStickNoteController", "findAllById", "Error", erro.message);
      return res.status(500).send({error: "Erro findAllById (VehicleStickNoteController)"});
    }
  },

  async delete(req, res) {
    try {
      logInfo("VehicleStickNoteController", "delete", "params", req.params);
      const vehicleStickNote = await VehicleStickNote.findByPk(req.params.id);
      await vehicleStickNote.destroy();
      const resp = res.json(vehicleStickNote ? vehicleStickNote : {});
      logInfo("VehicleStickNoteController", "delete", "Success", vehicleStickNote);
      return resp;
    } catch (erro) {
      logInfo("VehicleStickNoteController", "delete", "Error", erro.message);
      return res.status(500).send({error: "Erro delete (VehicleStickNoteController)"});
    }
  },
};
