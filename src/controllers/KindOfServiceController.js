const KindOfService = require("../models/KindOfService");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      const kindOfService = await KindOfService.findAll();
      return res.json(kindOfService);
    } catch (erro) {
      return console.error("Erro na findAll (KindOfServiceController) : ", erro);
    }
  },

  async create(req, res) {
    try {
      const kindOfService = await KindOfService.create({
        description: req.body.description,
      });
      return res.json(kindOfService);
    } catch (erro) {
      return console.error("Erro na create (KindOfServiceController): ", erro);
    }
  },

  async update(req, res) {
    try {
      const kindOfService = await KindOfService.findByPk(req.params.id);
      if (kindOfService) {
        (kindOfService.description = req.body.description),
        await KindOfSkindOfServiceervice.save();
      }

      return res.json(kindOfService);
    } catch (erro) {
      return console.error("Erro na update (KindOfServiceController): ", erro);
    }
  },

  async findAllById(req, res) {
    try {
      const kindOfService = await KindOfService.findByPk(req.params.id);

      return res.json(kindOfService);
    } catch (erro) {
      return console.error("Erro na findAllById (KindOfServiceController): ", erro);
    }
  },

  async delete(req, res) {
    try {
      const kindOfService = await KindOfService.findByPk(req.params.id);
      await kindOfService.destroy();
      return res.json(kindOfService);
    } catch (erro) {
      return console.error("Erro na delete (KindOfServiceController): ", erro);
    }
  },
};
