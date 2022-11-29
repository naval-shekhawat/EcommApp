const sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const dbConfig = require("./../config/db.config")[env];
let db = {};

db.connection = new sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});
db.sequelize = sequelize;
db.roles = require("./Roles")(sequelize, db.connection);
db.user = require("./User")(sequelize, db.connection);
db.product = require("./Product")(sequelize, db.connection);
db.cart = require("./Cart")(sequelize, db.connection);
db.category = require("./Category")(sequelize, db.connection);

db.roles.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});

db.user.belongsToMany(db.roles, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

db.product.belongsToMany(db.cart, {
  through: "cart_products",
  foreignKey: "productId",
  otherKey: "cartId",
});

db.cart.belongsToMany(db.product, {
  through: "cart_products",
  foreignKey: "cartId",
  otherKey: "productId",
});

db.Roles = ["user", "admin"];

module.exports = db;
