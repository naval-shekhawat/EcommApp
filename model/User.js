module.exports = (sequelize, dbConnection) => {
  const User = dbConnection.define("users", {
    username: {
      type: sequelize.STRING,
    },
    email: {
      type: sequelize.STRING,
    },
    password: {
      type: sequelize.STRING,
    },
  });

  return User;
};
