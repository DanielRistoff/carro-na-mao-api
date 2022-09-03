const sequelize = require("sequelize");
const database = require("../db");
const shema = "";

class KindOfService extends sequelize.Model {}

  const KindOfService = database.define("kind_of_service", 
  {
    id: {
      type: sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    description: {
      type: sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
);

module.exports = KindOfService;
