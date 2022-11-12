var express = require('express');
const path = require('path');
const productsRoute = require("./products.route");
const categoriesRoute = require("./categories.route");
var router = express.Router();

router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname +'./../views/index.html'));
});

// Base route for categories is "/categories"
router.use('/categories', categoriesRoute);
router.use('/products', productsRoute);
module.exports = router;