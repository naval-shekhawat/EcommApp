module.exports = (sequelize, dbConnection) => {
  const Role = dbConnection.define("roles", {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
    },
    name: {
      type: sequelize.STRING,
    },
  });

  return Role;
};
