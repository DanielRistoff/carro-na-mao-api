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
      allowNull: true,
    },
    current_mileage: {
      type: sequelize.INTEGER,
      allowNull: true,
    },
    average_monthly_mileage: {
      type: sequelize.INTEGER,
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
