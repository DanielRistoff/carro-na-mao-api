const sequelize = require("sequelize");
const database = new sequelize("carronamao", "postgres", "1234", {
  dialect: "postgres",
  host: "172.17.0.3",
  port: 5432,

});

//database.sync();

module.exports = database;
