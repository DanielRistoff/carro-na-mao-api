const { Op } = require("sequelize");
const PersonInformation = require("../models/PersonInformation");
const { logInfo } = require("../util/Logs");

module.exports = {
  async findAll(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      logInfo("PersonInformationController", "findAll", "", "");
      const personInformation = await PersonInformation.findAll();
      const resp = res.json(personInformation ? personInformation : {});
      logInfo("PersonInformationController", "findAll", "Success", personInformation);
      return resp;
    } catch (erro) {
      logInfo("PersonInformationController", "findAll", "Error", erro.message);
      return res.status(500).send({ error: "Erro findAll (PersonInformationController)" });
    }
  },

  async create(req, res) {
    try {
      logInfo("PersonInformationController", "create", "body", req.body);
      const personInformation = await PersonInformation.create({
        name: req.body.name,
        phone_number: req.body.phone_number,
        login: req.body.login,
        password: req.body.password,
        email: req.body.email,
        notify: req.body.notify,
        control_maintenance: req.body.control_maintenance,
        creation_date: req.body.creation_date,
        update_date: req.body.update_date,
      });
      const resp = res.json(personInformation ? personInformation : {});
      logInfo("PersonInformationController", "create", "Success", personInformation);
      return resp;
    } catch (erro) {
      logInfo("PersonInformationController", "create", "Error", erro.message);
      return res.status(500).send({ error: "Erro create (PersonInformationController)" });
    }
  },

  async update(req, res) {
    try {
      logInfo("PersonInformationController", "update", "params", req.params);
      logInfo("PersonInformationController", "update", "body", req.body);
      const personInformation = await PersonInformation.findByPk(req.params.id);
      if (personInformation) {
        (personInformation.name = req.body.name),
          (personInformation.phone_number = req.body.phone_number),
          (personInformation.login = req.body.login),
          (personInformation.password = req.body.password),
          (personInformation.email = req.body.email),
          (personInformation.notify = req.body.notify),
          (personInformation.control_maintenance = req.body.control_maintenance),
          (personInformation.creation_date = req.body.creation_date),
          (personInformation.update_date = req.body.update_date),
          await personInformation.save();
      }
      const resp = res.json(personInformation ? personInformation : {});
      logInfo("PersonInformationController", "update", "Success", personInformation);
      return resp;
    } catch (erro) {
      logInfo("PersonInformationController", "update", "Error", erro.message);
      return res.status(500).send({ error: "Erro na update (PersonInformationController)" });
    }
  },

  async findAllById(req, res) {
    try {
      logInfo("PersonInformationController", "findAllById", "params", req.params);
      const personInformation = await PersonInformation.findByPk(req.params.id);
      const resp = res.json(personInformation ? personInformation : {});
      logInfo("PersonInformationController", "findAllById", "Success", personInformation);
      return resp;
    } catch (erro) {
      logInfo("PersonInformationController", "findAllById", "Error", erro.message);
      return res.status(500).send({ error: "Erro findAllById (PersonInformationController)" });
    }
  },

  async findAllByLoginAndPassword(req, res) {
    try {
      logInfo("PersonInformationController", "findAllByLoginAndPassword", "params", req.params);
      const personInformation = await PersonInformation.findByPk(req.params.id);
      const resp = res.json(personInformation ? personInformation : {});
      logInfo("PersonInformationController", "findAllByLoginAndPassword", "Success", personInformation);
      return resp;
    } catch (erro) {
      logInfo("PersonInformationController", "findAllByLoginAndPassword", "Error", erro.message);
      return res.status(500).send({ error: "Erro findAllByLoginAndPassword (PersonInformationController)" });
    }
  },

  async delete(req, res) {
    try {
      logInfo("PersonInformationController", "delete", "params", req.params);
      const personInformation = await PersonInformation.findByPk(req.params.id);
      await personInformation.destroy();
      const resp = res.json(personInformation ? personInformation : {});
      logInfo("PersonInformationController", "delete", "Success", personInformation);
      return resp;
    } catch (erro) {
      logInfo("PersonInformationController", "delete", "Error", erro.message);
      return res.status(500).send({ error: "Erro na delete (PersonInformationController)" });
    }
  },

  async findAllByLogin(req, res) {
    logInfo("PersonInformationController", "findAllByLogin", "params", req.params);
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    try {
      const personInformation = await PersonInformation.findAll({
        include: [
          {
            attributes: ["id", "phone_number", "login", "password", "email", "notify", "control_maintenance", "creation_date", "update_date"],
            model: PersonInformation,
          },
        ],
        where: { login: { [Op.like]: `%${req.params.login}` } },
      });
      const resp = res.json(personInformation ? personInformation : {});
      logInfo("PersonInformationController", "findAllByLogin", "Success", personInformation);
      return resp;
    } catch (erro) {
      logInfo("PersonInformationController", "findAllByLogin", "Error", erro.message);
      return res.status(500).send({ error: "Erro findAllByLogin (PersonInformationController)", });
    }
  },

};
