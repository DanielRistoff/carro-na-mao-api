const sequelize = require("sequelize");
const database = require("../db");
const PersonInformation = require("./PersonInformation");
const Vehicle = require("./Vehicle");

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
  },
  PersonVehicle.belongsTo(PersonInformation, {
    foreignKey: 'person_information_id',
    allowNull: false
  }),
  PersonVehicle.belongsTo(Vehicle, {
    foreignKey: 'vehicle_id',
    allowNull: false
  })

);

module.exports = PersonVehicle;
