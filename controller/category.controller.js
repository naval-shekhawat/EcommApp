let Categories = require("./../model/category");

let getAllCategories = async (req, res, next) => {
  let categories = await Categories.findAll();
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write(JSON.stringify(categories));
  res.end();
};

let getCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  let categories = await Categories.findAll({
    where: {
      categoryId: id,
    },
  });

  req.status(200).json(categories);
  res.end();
};

let addNewCategory = async (req, res, next) => {
  try {
    let categoryToAdd = req.body;
    await Categories.create(categoryToAdd);
    res.status(201).send("New category added");
    res.end();
  } catch (err) {
    next(err);
  }
};

let deleteCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  let category = await Categories.findByPk(id);
  try {
    if (!category) {
      throw new Error("Category not found");
    }

    await Categories.destroy({
      where: {
        categoryId: id,
      },
    });

    res.status(200).send("category deleted");
    res.end();
  } catch (err) {
    next(err);
  }
};

let updateCategoryById = async (req, res, next) => {
  let id = req.params.categoryId;
  let categoryToUpdate = {
    name: req.body.name,
    price: req.body.price,
  };

  await Categories.update(categoryToUpdate, {
    where: {
      categoryId: id,
    },
  });

  let updateCategory = await Categories.findByPk(id);
  res.status(200).send(updateCategory);
};

let all = {
  getAllCategories,
  getCategoryById,
  addNewCategory,
  deleteCategoryById,
  updateCategoryById,
};
module.exports = all;
