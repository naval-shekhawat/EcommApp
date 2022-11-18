let express = require("express");
let categoryRouter = express.Router();
let categoryController = require("./../controller/category.controller");
let requestValidator = require("./../middlewares/RequestValidator");
// Base route here is /categories
categoryRouter.get("/", categoryController.getAllCategories);

categoryRouter.get(
  "/:categoryId",
  [requestValidator.validateReqForCategoryId],
  categoryController.getCategoryById
);

categoryRouter.put(
  "/:categoryId",
  [
    requestValidator.validateReqForCategoryName,
    requestValidator.validateReqForCategoryId,
  ],
  categoryController.updateCategoryById
);

categoryRouter.post(
  "/",
  [requestValidator.validateReqForCategoryName],
  categoryController.addNewCategory
);

categoryRouter.delete(
  "/:categoryId",
  [requestValidator.validateReqForCategoryId],
  categoryController.deleteCategoryById
);

module.exports = categoryRouter;
