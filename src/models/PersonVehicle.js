const sequelize = require("sequelize");
const database = require("../db");

const PersonVehicle = database.define("person_vehicle", 
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    person_information_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      validator: {
        notNull: true,
        isInt: true,
      },
    },
    vehicle_id: {
      type: sequelize.INTEGER,
      allowNull: false,
      validator: {
        notNull: true,
        isInt: true,
      },
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = PersonVehicle;
