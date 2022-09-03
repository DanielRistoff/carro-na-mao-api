const StickNote = require("../models/StickNote");

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
      return console.error("Erro na findAll (StickNoteControllerController) : ", erro);
    }
  },

  async create(req, res) {
    try {
      const stickNote = await StickNote.create({
        date: req.body.date,
        hour: req.body.hour,
        kind_of_service_id: req.body.kindOfService,
        note: req.body.note,
        status: req.body.status,
        created: req.body.created,
        update: req.body.update,
      });
      return res.json(stickNote);
    } catch (erro) {
      return console.error("Erro na create (StickNoteControllerController): ", erro);
    }
  },

  async update(req, res) {
    try {
      const stickNote = await StickNote.findByPk(req.params.id);
      if (stickNote) {
        (stickNote.date = req.body.date),
          (stickNote.hour = req.body.hour),
          (stickNote.kind_of_service_id = req.body.kind_of_service_id),
          (stickNote.note = req.body.note),
          (stickNote.status = req.body.status),
          (stickNote.created = req.body.created),
          (stickNote.update = req.body.update),
        await stickNote.save();
      }

      return res.json(stickNote);
    } catch (erro) {
      return console.error("Erro na update (StickNoteControllerController): ", erro);
    }
  },

  async findAllById(req, res) {
    try {
      const stickNote = await StickNote.findByPk(req.params.id);

      return res.json(stickNote);
    } catch (erro) {
      return console.error("Erro na findAllById (StickNoteControllerController): ", erro);
    }
  },

  async delete(req, res) {
    try {
      const stickNote = await StickNote.findByPk(req.params.id);
      await stickNote.destroy();
      return res.json(stickNote);
    } catch (erro) {
      return console.error("Erro na delete (StickNoteControllerController): ", erro);
    }
  },
};
