const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

const VehicleStickNote = database.define("vehicle_stick_note",
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
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  },
  VehicleStickNote.belongsTo(BrandModelYear, {
    foreignKey: 'stick_note_id',
    allowNull: false
  })
);

module.exports = VehicleStickNote;
