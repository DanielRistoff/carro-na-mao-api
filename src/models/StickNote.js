const sequelize = require("sequelize");
const database = require("../db");
const KindOfService = require("./KindOfService");
const shema = "";

class StickNote extends sequelize.Model {}

StickNote.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: sequelize.STRING,
      allowNull: false,
    },
    hour: {
      type: sequelize.STRING,
      allowNull: false,
    },
    kind_of_service_id: {
      type: KindOfService,
      allowNull: false,
    },
    note: {
      type: sequelize.STRING,
      allowNull: false,
    },
    status: {
      type: sequelize.STRING,
      allowNull: false,
    },
    created: {
      type: sequelize.DataTypes.DATE,
      allowNull: false,
    },
    update: {
      type: sequelize.DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "stick_note",
    shema,
  }
);

module.exports = StickNote;
