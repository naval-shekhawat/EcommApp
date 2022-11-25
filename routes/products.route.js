let express = require("express");
let productRouter = express.Router();
let productController = require("./../controller/product.controller");
let authJwt = require("./../middlewares/authJwt");

productRouter.get("/", [authJwt.VerifyToken], productController.getAllProducts);
productRouter.get("/:productId", productController.getProductById);

productRouter.post("/", productController.insertProducts);

module.exports = productRouter;
