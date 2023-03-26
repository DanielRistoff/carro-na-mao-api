const sequelize = require("sequelize");
const database = require("../db");
const BrandModel = require("./BrandModel");

const BrandModelYear = database.define("brand_model_year",
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    brand_model_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      validator: {
        notNull: true,
        isInt: true,
      },
    },
    year: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  },
  BrandModelYear.belongsTo(BrandModel, {
    foreignKey: 'brand_model_id',
    allowNull: false
  })
);

module.exports = BrandModelYear;
