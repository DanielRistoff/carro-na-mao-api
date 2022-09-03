const StickNote = require("../models/StickNote");
const validations = require("../util/Validations");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      const stickNote = await StickNote.findAll();
      return res.json(stickNote);
    } catch (erro) {
      return res.status(500).send({error: "Erro findAll (StickNoteControllerController)"});
    }
  },

  async create(req, res) {
    try {
      const stickNote = await StickNote.create({
        date: req.body.date,
        hour: req.body.hour,
        kind_of_service_id: req.body.kindOfService,
        note: validations.validarValores(req.body.note),
        status: req.body.status,
        created: req.body.created,
        update: validations.validarValores(req.body.update),
      });
      return res.json(stickNote);
    } catch (erro) {
      return res.status(500).send({error: "Erro create (StickNoteControllerController)"});
    }
  },

  async update(req, res) {
    try {
      const stickNote = await StickNote.findByPk(req.params.id);
      if (stickNote) {
        (stickNote.date = req.body.date),
          (stickNote.hour = req.body.hour),
          (stickNote.kind_of_service_id = req.body.kindOfService),
          (stickNote.note = validations.validarValores(req.body.note)),
          (stickNote.status = req.body.status),
          (stickNote.created = req.body.created),
          (stickNote.update = validations.validarValores(req.body.update)),
        await stickNote.save();
      }

      return res.json(stickNote);
    } catch (erro) {
      return res.status(500).send({error: "Erro update (StickNoteControllerController)"});
    }
  },

  async findAllById(req, res) {
    try {
      const stickNote = await StickNote.findByPk(req.params.id);

      return res.json(stickNote);
    } catch (erro) {
      return res.status(500).send({error: "Erro findAllById (StickNoteControllerController)"});
    }
  },

  async delete(req, res) {
    try {
      const stickNote = await StickNote.findByPk(req.params.id);
      await stickNote.destroy();
      return res.json(stickNote);
    } catch (erro) {
      return res.status(500).send({error: "Erro delete (StickNoteControllerController)"});
    }
  },
};
