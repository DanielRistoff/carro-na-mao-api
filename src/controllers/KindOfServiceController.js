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
      logInfo("KindOfServiceController", "findAll", "", "");
      const kindOfService = await KindOfService.findAll();
      const resp = res.json(kindOfService ? kindOfService : {});
      logInfo("KindOfServiceController", "findAll", "Success", kindOfService);
      return resp;
    } catch (erro) {
      logInfo("KindOfServiceController", "findAll", "Error", erro.message);
      return res.status(500).send({ error: "Erro findAll (KindOfServiceController)" });
    }
  },

  async create(req, res) {
    try {
      logInfo("KindOfServiceController", "create", "body", req.body);
      const kindOfService = await KindOfService.create({
        description: req.body.description,
      });
      const resp = res.json(kindOfService ? kindOfService : {});
      logInfo("KindOfServiceController", "create", "Success", kindOfService);
      return resp;
    } catch (erro) {
      logInfo("KindOfServiceController", "create", "Error", erro);
      return res.status(500).send({ error: "Erro create (KindOfServiceController)" });
    }
  },

  async update(req, res) {
    try {
      logInfo("KindOfServiceController", "update", "params", req.params);
      logInfo("KindOfServiceController", "update", "body", req.body);
      const kindOfService = await KindOfService.findByPk(req.params.id);
      if (kindOfService) {
        (kindOfService.description = req.body.description),
          await KindOfSkindOfServiceervice.save();
      }
      const resp = res.json(kindOfService ? kindOfService : {});
      logInfo("KindOfServiceController", "update", "Success", kindOfService);
      return resp;
    } catch (erro) {
      logInfo("KindOfServiceController", "update", "Error", erro.message);
      return res.status(500).send({ error: "Erro update (KindOfServiceController)" });
    }
  },

  async findAllById(req, res) {
    try {
      logInfo("KindOfServiceController", "findAllById", "params", req.params);
      const kindOfService = await KindOfService.findByPk(req.params.id);
      const resp = res.json(kindOfService ? kindOfService : {});
      logInfo("KindOfServiceController", "findAllById", "Success", kindOfService);
      return resp;
    } catch (erro) {
      logInfo("KindOfServiceController", "findAllById", "Error", erro.message);
      return res.status(500).send({ error: "Erro findAllById (KindOfServiceController)" });
    }
  },

  async delete(req, res) {
    try {
      logInfo("KindOfServiceController", "delete", "params", req.params);
      const kindOfService = await KindOfService.findByPk(req.params.id);
      await kindOfService.destroy();
      const resp = res.json(kindOfService ? kindOfService : {});
      logInfo("KindOfServiceController", "delete", "Success", kindOfService);
      return resp;
    } catch (erro) {
      logInfo("KindOfServiceController", "delete", "Error", erro.message);
      return res.status(500).send({ error: "Erro delete (KindOfServiceController)" });
    }
  },
};
