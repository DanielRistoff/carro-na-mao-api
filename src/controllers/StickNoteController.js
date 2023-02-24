const { Op } = require("sequelize");
const StickNote = require("../models/StickNote");
const validations = require("../util/Validations");
const KindOfService = require("../models/KindOfService");
const { logInfo } = require("../util/Logs");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      logInfo("StickNoteController", "findAll", "", "");
      const stickNote = await StickNote.findAll({
        include: [
          {
            attributes: ["id", "description"],
            model: KindOfService,
          },
        ],
      });
      const resp = res.json(stickNote ? stickNote : {});
      logInfo("StickNoteController", "findAll", "Success", stickNote);
      return resp;
    } catch (erro) {
      logInfo("StickNoteController", "findAll", "Error", erro.message);
      return res.status(500).send({ error: "Erro findAll (StickNoteController)" });
    }
  },

  async findAllByStatus(req, res) {
    logInfo("StickNoteController", "findAllByStatus", "params", req.params);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      const stickNote = await StickNote.findAll({
        include: [
          {
            attributes: ["id", "description"],
            model: KindOfService,
          },
        ],
        where: { status: { [Op.like]: `%${req.params.status}` } },
      });
      const resp = res.json(stickNote ? stickNote : {});
      logInfo("StickNoteController", "findAllByStatus", "Success", stickNote);
      return resp;
    } catch (erro) {
      logInfo("StickNoteController", "findAllByStatus", "Error", erro.message);
      return res.status(500).send({error: "Erro findAllByStatus (StickNoteController)",});
    }
  },

  async create(req, res) {
    try {
      logInfo("StickNoteController", "create", "body", req.body);
      const stickNote = await StickNote.create({
        date: req.body.date,
        hour: req.body.hour,
        kind_of_service_id: req.body.kindOfService,
        note: validations.validarValores(req.body.note),
        status: req.body.status,
        creation_date: req.body.creation_date,
        update: validations.validarValores(req.body.update),
      });
      const resp = res.json(stickNote ? stickNote : {});
      logInfo("StickNoteController", "create", "Success", stickNote);
      return resp;
    } catch (erro) {
      logInfo("StickNoteController", "create", "Error", erro.message);
      return res.status(500).send({ error: "Erro create (StickNoteController)" });
    }
  },

  async update(req, res) {
    try {
      logInfo("StickNoteController", "update", "body", req.body);
      const stickNote = await StickNote.findByPk(req.params.id);
      if (stickNote) {
        (stickNote.date = req.body.date),
        (stickNote.hour = req.body.hour),
        (stickNote.kind_of_service_id = req.body.kindOfService),
        (stickNote.note = validations.validarValores(req.body.note)),
        (stickNote.status = req.body.status),
        (stickNote.creation_date = req.body.creation_date),
        (stickNote.update_date = validations.validarValores(req.body.update_date)),
        await stickNote.save();
      }
      const resp = res.json(stickNote ? stickNote : {});
      logInfo("StickNoteController", "update", "Success", stickNote);
      return resp;
    } catch (erro) {
      logInfo("StickNoteController", "update", "Error", erro.message);
      return res.status(500).send({ error: "Erro update (StickNoteControllerController)" });
    }
  },

  async findAllById(req, res) {
    try {
      logInfo("StickNoteController", "findAllById", "params", req.params);
      const stickNote = await StickNote.findByPk(req.params.id);
      const resp = res.json(stickNote ? stickNote : {});
      logInfo("StickNoteController", "findAllById", "Success", stickNote);
      return resp;
    } catch (erro) {
      logInfo("StickNoteController", "findAllById", "Error", erro.message);
      return res.status(500).send({ error: "Erro findAllById (StickNoteController)" });
    }
  },

  async delete(req, res) {
    try {
      logInfo("StickNoteController", "delete", "params", req.params);
      const stickNote = await StickNote.findByPk(req.params.id);
      await stickNote.destroy();
      const resp = res.json(stickNote ? stickNote : {});
      logInfo("StickNoteController", "delete", "Success", stickNote);
      return resp;
    } catch (erro) {
      logInfo("StickNoteController", "delete", "Error", erro.message);
      return res.status(500).send({ error: "Erro delete (StickNoteControllerController)" });
    }
  },
};
