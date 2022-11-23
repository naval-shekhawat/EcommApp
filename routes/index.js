var express = require("express");
const path = require("path");
const productsRoute = require("./products.route");
const categoriesRoute = require("./categories.route");
const authRoute = require("./auth.route");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname + "./../views/index.html"));
});

// Base route for categories is "/categories"
router.use("/ecomm/api/v1/categories/", categoriesRoute);
router.use("/ecomm/api/v1/products", productsRoute);
router.use("/ecomm/api/v1/auth", authRoute);
module.exports = router;
