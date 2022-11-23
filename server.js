const express = require("express");
let bodyParser = require("body-parser");
const serverConfig = require("./config/server.config");
const router = require("./routes/index");
const ErrorHandler = require("./middlewares/ErrorHandler");
const dbConnection = require("./config/db.config");
const Category = require("./model/category");
const Products = require("./model/product");
const Role = require("./model/Roles");
const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);

Category.hasMany(Products);

let init = async () => {
  await dbConnection.sync({ force: true });
  insertCategories();
  insertRoles();
};

let insertCategories = async () => {
  await Category.bulkCreate([
    {
      name: "Fashion",
    },
    {
      name: "Mobile",
    },
    {
      name: "Electronics",
    },
    {
      name: "Appliances",
    },
  ]);
};

let insertRoles = async () => {
  await Role.bulkCreate([
    {
      id: 1,
      name: "user",
    },
    {
      id: 2,
      name: "admin",
    },
  ]);
  console.log("roles added");
};

expressApp.listen(serverConfig.PORT, () => {
  console.log("server listening at port " + serverConfig.PORT);
  init();
});
