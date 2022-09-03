const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

class VehicleStickNote extends sequelize.Model {}

VehicleStickNote.init(
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    vehicle_id: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    stick_note_id: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: database,
    modelName: "vehicle_stick_note",
    shema,
  }
);

module.exports = VehicleStickNote;
