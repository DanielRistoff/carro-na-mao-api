const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

class KindOfService extends sequelize.Model {}

KindOfService.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "kind_of_service",
    shema,
  }
);

module.exports = KindOfService;
