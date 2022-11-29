module.exports = (sequelize, sequelizeInstance) => {
  let Categories = sequelizeInstance.define(
    "categories",
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
    },
    {
      timestamps: false,
    }
  );

  return Categories;
};
