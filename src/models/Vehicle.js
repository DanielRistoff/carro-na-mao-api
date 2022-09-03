const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

class Vehicle extends sequelize.Model {}

Vehicle.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    board: {
      type: sequelize.STRING,
      allowNull: false,
    },
    cellphone: {
      type: sequelize.STRING,
      allowNull: false,
    },
    vin: {
      type: sequelize.STRING,
      allowNull: false,
    },
    brand_model_year_id: {
      type: sequelize.INTEGER,
      allowNull: false,
    }
  },
  {
    sequelize: database,
    modelName: "vehicle",
    shema,
  }
);

module.exports = Vehicle;
