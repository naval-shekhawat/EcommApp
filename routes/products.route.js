let express = require("express");
let productRouter = express.Router();
let productController = require("./../controller/product.controller");

productRouter.get("/", productController.getAllProducts);

productRouter.get("/:productId", productController.getProductById);

module.exports = productRouter;
