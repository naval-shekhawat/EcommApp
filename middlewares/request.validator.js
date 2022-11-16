const Categories = require("../model/category");

const validateCategoryRequest = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Name of the category not passed",
    });
    return;
  }

  next();
};

const validateCategoryPassedInReqParam = async (req, res, next) => {
  const categoryId = req.params.categoryId;
  if (categoryId) {
    try {
      let category = await Categories.findByPk(categoryId);
      if (!category) {
        res.status(400).send({
          message: "Category not found",
        });

        return;
      }
      next();
    } catch (err) {
      res.status(500).send({
        message: "Some Internal error while storing the product!",
      });

      return;
    }
  }
};

module.exports = { validateCategoryRequest, validateCategoryPassedInReqParam };
