const VehicleStickNote = require("../models/VehicleStickNote");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      const vehicleStickNote = await VehicleStickNote.findAll();
      return res.json(vehicleStickNote);
    } catch (erro) {
      return console.error("Erro na findAll (VehicleStickNoteController) : ", erro);
    }
  },

  async create(req, res) {
    try {
      const vehicleStickNote = await VehicleStickNote.create({
        vehicle_id: req.body.vehicle_id,
        stick_note_id: req.body.stick_note_id,
      });
      return res.json(vehicleStickNote);
    } catch (erro) {
      return console.error("Erro na create (VehicleStickNoteController): ", erro);
    }
  },

  async update(req, res) {
    try {
      const vehicleStickNote = await VehicleStickNote.findByPk(req.params.id);
      if (vehicleStickNote) {
          (vehicleStickNote.vehicle_id = req.body.vehicle_id),
          (vehicleStickNote.stick_note_id = req.body.stick_note_id),
        await vehicleStickNote.save();
      }

      return res.json(vehicleStickNote);
    } catch (erro) {
      return console.error("Erro na update (VehicleStickNoteController): ", erro);
    }
  },

  async findAllById(req, res) {
    try {
      const vehicleStickNote = await VehicleStickNote.findByPk(req.params.id);

      return res.json(vehicleStickNote);
    } catch (erro) {
      return console.error("Erro na findAllById (VehicleStickNoteController): ", erro);
    }
  },

  async delete(req, res) {
    try {
      const vehicleStickNote = await VehicleStickNote.findByPk(req.params.id);
      await vehicleStickNote.destroy();
      return res.json(vehicleStickNote);
    } catch (erro) {
      return console.error("Erro na delete (VehicleStickNoteController): ", erro);
    }
  },
};
