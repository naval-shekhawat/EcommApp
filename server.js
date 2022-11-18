const express = require("express");
let bodyParser = require("body-parser");
const serverConfig = require("./config/server.config");
const router = require("./routes/index");
const ErrorHandler = require("./middlewares/ErrorHandler");
const dbConnection = require("./config/db.config");
const Category = require("./model/category");
const Products = require("./model/product");
const expressApp = express();
expressApp.use(bodyParser.json());
expressApp.use(router);
expressApp.use(ErrorHandler);

Category.hasMany(Products);

let init = async () => {
  await dbConnection.sync({ force: true });
  insertCategories();
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

expressApp.listen(serverConfig.PORT, () => {
  console.log("server listening at port " + serverConfig.PORT);
  init();
});
