const Sequelize = require("sequelize");
const instance = new Sequelize(
 "ecomm_db",
 "root",
 "Relevel@123",
    {
        host: "localhost",
        dialect: "mysql",
        operatorsAliases: 0,
        pool: {
            max: 5,
            min: 0,
            acquire:30000,
            idle: 10000
        }
    }
);

module.exports = instance;