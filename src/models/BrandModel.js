const sequelize = require("sequelize");
const database = require("../db");
const Brand = require("./Brand");

const BrandModel = database.define("brand_model",
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    brand_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      validator: {
        notNull: true,
        isInt: true,
      },
    },
    description: {
      type: sequelize.STRING,
      allowNull: false,
    },
    vehicle_type: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  },
  BrandModel.belongsTo(Brand, {
    foreignKey: 'brand_id',
    allowNull: false
  })
);

module.exports = BrandModel;
