const db = require("./../model");

let createCart = async (req, res, next) => {
  let cart = req.body;
  try {
    await db.cart.create(cart);
    res.status(200).json({
      message: "Cart Created",
    });
  } catch (err) {
    res.status(401).json({
      message: "Some interal error happened",
    });
  }
};

let updateCart = async (req, res, next) => {
  const cartId = req.params.cartId;
  let cartToUpdate = await db.cart.findByPk(cartId);
  if (cartToUpdate) {
    let productsToAdd = await db.product.findAll({
      where: {
        id: req.body.productIds,
      },
    });

    if (productsToAdd) {
      await cartToUpdate.setProducts(productsToAdd);
      let totalCost = 0;
      let productsSelected = [];
      let products = await cartToUpdate.getProducts();
      for (i = 0; i < products.length; i++) {
        totalCost = totalCost + products[i].price;
        productsSelected.push({
          id: products[i].id,
          name: products[i].name,
          cost: products[i].price,
        });
      }

      res.status(200).json({
        id: cartToUpdate.id,
        productsSelected,
        totalCost,
      });
    }
  }
};

let getCart = async (req, res, next) => {
  let cart = await db.cart.findByPk(req.params.cartId);
  let totalCost = 0;
  let productsSelected = [];
  let products = await cart.getProducts();
  for (i = 0; i < products.length; i++) {
    totalCost = cost + products[i].cost;
    productsSelected.push({
      id: products[i].id,
      name: products[i].name,
      cost: products[i].cost,
    });
  }

  res.status(200).json({
    id: cart.id,
    productsSelected,
    totalCost,
  });
};

module.exports = {
  createCart,
  getCart,
  updateCart,
};
