const Brand = require("../models/Brand");
const { logInfo } = require("../util/Logs");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      logInfo("Brand", "findAll", "", "");
      const brand = await Brand.findAll();
      const resp = res.json(brand ? brand : {});
      logInfo("Brand", "findAll", "Success", brand);
      return resp;
    } catch (erro) {
      logInfo("Brand", "findAll", "Error", erro.message);
      return res.status(500).send({error: "Erro findAll (Brand)"});
    }
  },

  async create(req, res) {
    try {
      logInfo("Brand", "create", "body", req.body);
      const brand = await Brand.create({
        brand_model_id: req.body.description,
      });
      const resp = res.json(brand ? brand : {});
      logInfo("Brand", "create", "Success", brand);
      return resp;
    } catch (erro) {
      logInfo("Brand", "create", "Error", erro.message);
      return res.status(500).send({error: "Erro create (Brand)"});
    }
  },

  async update(req, res) {
    try {
      logInfo("Brand", "update", "params", req.params);
      logInfo("Brand", "update", "body", req.body);
      const brand = await Brand.findByPk(req.params.id);
      if (brand) {
        (brand.description = req.body.description)
        await brand.save();
      }
      const resp = res.json(brand ? brand : {});
      logInfo("Brand", "update", "Success", brand);
      return resp;
    } catch (erro) {
      logInfo("Brand", "update", "Error", erro.message);
      return res.status(500).send({error: "Erro na update (Brand)"});
    }
  },

  async findAllById(req, res) {
    try {
      logInfo("Brand", "findAllById", "params", req.params);
      const brand = await Brand.findByPk(req.params.id);
      const resp = res.json(brand ? brand : {});
      logInfo("Brand", "findAllById", "Success", brand);
      return resp;
    } catch (erro) {
      logInfo("Brand", "findAllById", "Error", erro.message);
      return res.status(500).send({error: "Erro findAllById (Brand)"});
    }
  },

  async delete(req, res) {
    try {
      logInfo("Brand", "delete", "params", req.params);
      const brand = await Brand.findByPk(req.params.id);
      await brand.destroy();
      const resp = res.json(brand ? brand : {});
      logInfo("Brand", "delete", "Success", brand);
      return resp;
    } catch (erro) {
      logInfo("Brand", "delete", "Error", erro.message);
      return res.status(500).send({error: "Erro na delete (Brand)"});
    }
  },
};
