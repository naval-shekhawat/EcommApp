let express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./../controller/category.controller");

// Base route here is /categories
categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get("/:categoryId", categoryController.getCategoryById);

categoryRouter.post("/", categoryController.addNewCategory);

categoryRouter.delete("/:categoryId", categoryController.deleteCategoryById);

module.exports = categoryRouter;