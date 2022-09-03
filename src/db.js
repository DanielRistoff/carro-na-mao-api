const sequelize = require("sequelize");
const database = new sequelize("carronamao", "postgres", "root", {
  dialect: "postgres",
  host: "localhost",
  port: 5432,
});

//database.sync();

module.exports = database;
