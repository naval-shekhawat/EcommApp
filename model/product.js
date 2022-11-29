module.exports = (sequelize, sequelizeInstance) => {
  let Products = sequelizeInstance.define(
    "products",
    {
      id: {
        type: sequelize.DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: sequelize.DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: sequelize.DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Products;
};
