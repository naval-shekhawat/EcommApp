const Categories = require("./../model/category");

const validateReqForCategoryName = (req, res, next) => {
  if (!req.body.name) {
    res.status(400).send({
      message: "Category name is required",
    });
  }
  next();
};

const validateReqForCategoryId = async (req, res, next) => {
  let categoryId = req.params.categoryId;
  if (categoryId) {
    let category = await Categories.findByPk(categoryId);
    if (!category) {
      res.status(400).send({
        message: "Category does not exist",
      });
    }
  } else {
    res.status(400).send({
      message: "Category id is missing",
    });
  }
  res.end();
};

module.exports = { validateReqForCategoryName, validateReqForCategoryId };
