let express = require("express");
let router = express.Router();
let categoryRoutes = require("./categories.route");
let productRoutes = require("./products.route");

router.get("/", (req,res,next) => {
    res.write("this is the base page");
    res.end();
});

// This is for categories
router.use("/categories", categoryRoutes);

// This is for products
router.use("/products", productRoutes);

module.exports = router;