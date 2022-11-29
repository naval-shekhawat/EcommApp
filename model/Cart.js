module.exports = (sequelize, sequelizeInstance) => {
  let Cart = sequelizeInstance.define(
    "cart",
    {
      id: {
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      cost: {
        type: sequelize.DataTypes.DECIMAL,
      },
    },
    {
      timestamps: false,
    }
  );

  return Cart;
};
