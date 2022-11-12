let sequelizeInstance = require("./../config/db.config");
const sequelize = require("sequelize");

let Products = sequelizeInstance.define("products",
    {
        id : {
            type: sequelize.DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name : {
            type: sequelize.DataTypes.STRING,
            allowNull: false
        },
        categoryId: {
            type: sequelize.DataTypes.INTEGER,
            allowNull: false
        },
        price: {
            type: sequelize.DataTypes.BIGINT,
            allowNull: false
        }
    },
    {
        timestamps: false
    }
)

module.exports = Products;