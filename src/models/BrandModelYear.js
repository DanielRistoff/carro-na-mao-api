const Sequelize = require("sequelize");
const database = require("../db");
const shema = "";

const BrandModelYear = database.define("brand_model_year", 
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    brand_model_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validator: {
        notNull: true,
        isInt: true,
      }
    },
    year: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = BrandModelYear;
