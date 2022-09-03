const sequelize = require("sequelize");
const database = require("../db");
const BrandModelYear = require("./BrandModelYear");

const Vehicle = database.define("vehicle", 
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
      allowNull: true,
    },
    brand_model_year_id: {
      type: BrandModelYear,
      allowNull: true,
    }
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = Vehicle;
