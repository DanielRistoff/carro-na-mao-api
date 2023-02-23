const BrandModelYear = require("../models/BrandModelYear");
const { logInfo } = require("../util/Logs");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      logInfo("BrandModelYearController", "findAll", "", "");
      const brandModelYear = await BrandModelYear.findAll();
      const resp = res.json(brandModelYear ? brandModelYear : {});
      logInfo("BrandModelYearController", "findAll", "Success", brandModelYear);
      return resp;
    } catch (erro) {
      logInfo("BrandModelYearController", "findAll", "Error", erro.message);
      return res.status(500).send({error: "Erro findAll (BrandModelYearController)"});
    }
  },

  async create(req, res) {
    try {
      logInfo("BrandModelYearController", "create", "body", req.body);
      const brandModelYear = await BrandModelYear.create({
        brand_model_id: req.body.brand_model_id,
        year: req.body.year,
      });
      const resp = res.json(brandModelYear ? brandModelYear : {});
      logInfo("BrandModelYearController", "create", "Success", brandModelYear);
      return resp;
    } catch (erro) {
      logInfo("BrandModelYearController", "create", "Error", erro.message);
      return res.status(500).send({error: "Erro create (BrandModelYearController)"});
    }
  },

  async update(req, res) {
    try {
      logInfo("BrandModelYearController", "update", "params", req.params);
      logInfo("BrandModelYearController", "update", "body", req.body);
      const brandModelYear = await BrandModelYear.findByPk(req.params.id);
      if (brandModelYear) {
        (brandModelYear.brand_model_id = req.body.brand_model_id),
        (brandModelYear.year = req.body.year),
        await brandModelYear.save();
      }
      const resp = res.json(brandModelYear ? brandModelYear : {});
      logInfo("BrandModelYearController", "update", "Success", brandModelYear);
      return resp;
    } catch (erro) {
      logInfo("BrandModelYearController", "update", "Error", erro.message);
      return res.status(500).send({error: "Erro na update (BrandModelYearController)"});
    }
  },

  async findAllById(req, res) {
    try {
      logInfo("BrandModelYearController", "findAllById", "params", req.params);
      const brandModelYear = await BrandModelYear.findByPk(req.params.id);
      const resp = res.json(brandModelYear ? brandModelYear : {});
      logInfo("BrandModelYearController", "findAllById", "Success", brandModelYear);
      return resp;
    } catch (erro) {
      logInfo("BrandModelYearController", "findAllById", "Error", erro.message);
      return res.status(500).send({error: "Erro findAllById (BrandModelYearController)"});
    }
  },

  async delete(req, res) {
    try {
      logInfo("BrandModelYearController", "delete", "params", req.params);
      const brandModelYear = await BrandModelYear.findByPk(req.params.id);
      await brandModelYear.destroy();
      const resp = res.json(brandModelYear ? brandModelYear : {});
      logInfo("BrandModelYearController", "delete", "Success", brandModelYear);
      return resp;
    } catch (erro) {
      logInfo("BrandModelYearController", "delete", "Error", erro.message);
      return res.status(500).send({error: "Erro na delete (BrandModelYearController)"});
    }
  },
};
