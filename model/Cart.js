let sequelizeInstance = require("./../config/db.config");
const sequelize = require("sequelize");

let Cart = sequelizeInstance.define(
  "cart",
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    cost: {
      type: sequelize.DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Cart;
