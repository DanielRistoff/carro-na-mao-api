const sequelize = require("sequelize");
const database = require("../db");

const PersonInformation = database.define("person_information", 
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: true,
    },
    phone_number: {
      type: sequelize.STRING,
      allowNull: true,
    },
    login: {
      type: sequelize.STRING,
      allowNull: true,
    },
    password: {
      type: sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: sequelize.STRING,
      allowNull: true,
    },
    notify: {
      type: sequelize.BOOLEAN,
      allowNull: false,
    },
    control_maintenance: {
      type: sequelize.BOOLEAN,
      allowNull: false,
    },
    creation_date: {
      type: sequelize.DataTypes.DATE,
      allowNull: false,
    },
    update_date: {
      type: sequelize.DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = PersonInformation;
