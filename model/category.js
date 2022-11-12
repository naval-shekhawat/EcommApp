let sequelizeInstance = require("./../config/db.config");
const sequelize = require("sequelize");

let Categories = sequelizeInstance.define("categories",
    {
        categoryId : {
            type: sequelize.DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

module.exports = Categories;