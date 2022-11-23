let dbConnection = require("./../config/db.config");
const sequelize = require("sequelize");

const Role = dbConnection.define("roles", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
  },
});

module.exports = Role;
