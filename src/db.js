const sequelize = require("sequelize");
const database = new sequelize("carronamao", "postgres", "1234", {
  dialect: "postgres",
  host: "127.0.0.1",
  port: 5432,

});

//database.sync();

module.exports = database;
