const BrandModel = require("../models/BrandModel");
const { logInfo } = require("../util/Logs");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      logInfo("BrandModelController", "findAll", "", "");
      const brandModel = await BrandModel.findAll();
      const resp = res.json(brandModel ? brandModel : {});
      logInfo("BrandModelController", "findAll", "Success", brandModel);
      return resp;
    } catch (erro) {
      logInfo("BrandModelController", "findAll", "Error", erro.message);
      return res.status(500).send({error: "Erro findAll (BrandModelController)"});
    }
  },

  async create(req, res) {
    try {
      logInfo("BrandModelController", "create", "body", req.body);
      const brandModel = await BrandModel.create({
        brand_id: req.body.brand_id,
        description: req.body.description,
        vehicle_type: req.body.vehicle_type,
      });
      const resp = res.json(brandModel ? brandModel : {});
      logInfo("BrandModelController", "create", "Success", brandModel);
      return resp;
    } catch (erro) {
      logInfo("BrandModelController", "create", "Error", erro.message);
      return res.status(500).send({error: "Erro create (BrandModelController)"});
    }
  },

  async update(req, res) {
    try {
      logInfo("BrandModelController", "update", "params", req.params);
      logInfo("BrandModelController", "update", "body", req.body);
      const brandModel = await BrandModel.findByPk(req.params.id);
      if (brandModel) {
        (brandModel.brand_id = req.body.brand_id),
        (brandModel.description = req.body.description),
        (brandModel.vehicle_type = req.body.vehicle_type),
        await brandModel.save();
      }
      const resp = res.json(brandModel ? brandModel : {});
      logInfo("BrandModelController", "update", "Success", brandModel);
      return resp;
    } catch (erro) {
      logInfo("BrandModelController", "update", "Error", erro.message);
      return res.status(500).send({error: "Erro na update (BrandModelController)"});
    }
  },

  async findAllById(req, res) {
    try {
      logInfo("BrandModelController", "findAllById", "params", req.params);
      const brandModel = await BrandModel.findByPk(req.params.id);
      const resp = res.json(brandModel ? brandModel : {});
      logInfo("BrandModelController", "findAllById", "Success", brandModel);
      return resp;
    } catch (erro) {
      logInfo("BrandModelController", "findAllById", "Error", erro.message);
      return res.status(500).send({error: "Erro findAllById (BrandModelController)"});
    }
  },

  async delete(req, res) {
    try {
      logInfo("BrandModelController", "delete", "params", req.params);
      const brandModel = await BrandModel.findByPk(req.params.id);
      await brandModel.destroy();
      const resp = res.json(brandModel ? brandModel : {});
      logInfo("BrandModelController", "delete", "Success", brandModel);
      return resp;
    } catch (erro) {
      logInfo("BrandModelController", "delete", "Error", erro.message);
      return res.status(500).send({error: "Erro na delete (BrandModelController)"});
    }
  },
};
