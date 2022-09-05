const sequelize = require("sequelize");
const database = require("../db");
const KindOfService = require("./KindOfService");

const StickNote = database.define("stick_note", 
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    date: {
      type: sequelize.STRING,
      allowNull: false,
    },
    hour: {
      type: sequelize.STRING,
      allowNull: false,
    },
    kind_of_service_id: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    note: {
      type: sequelize.STRING,
      allowNull: true,
    },
    status: {
      type: sequelize.INTEGER,
      allowNull: false,
    },
    created: {
      type: sequelize.DataTypes.DATE,
      allowNull: false,
    },
    update: {
      type: sequelize.DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  },
);

StickNote.belongsTo(KindOfService, {
  foreignKey: 'kind_of_service_id',
  allowNull: false
})

module.exports = StickNote;
