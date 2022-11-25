const db = require("./../model");
const Product = db.product;
const Cart = db.cart;

let createCart = async (req, res, next) => {
  const cart = { cost: 0 };
  try {
    await Cart.create(cart);
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
  let cartToUpdate = await Cart.findByPk(cartId);
  if (cartToUpdate) {
    let productsToAdd = await Product.findAll({
      where: {
        id: req.body.productIds,
      },
    });

    if (productsToAdd) {
      await cartToUpdate.setProducts(productsToAdd);
      console.log("Product added");
      let cost = 0;
      let productsSelected = [];
      let products = await cartToUpdate.getProducts();
      for (i = 0; i < products.length; i++) {
        cost = cost + products[i].price;
        productsSelected.push({
          id: products[i].id,
          name: products[i].name,
          cost: products[i].price,
        });
      }

      res.status(200).json({
        id: cartToUpdate.id,
        productsSelected,
        cost,
      });
    }
  }
};

let getCart = async (req, res, next) => {
  let cart = await Cart.findByPk(req.params.cartId);
  let cost = 0;
  let productsSelected = [];
  let products = await cart.getProducts();
  for (i = 0; i < products.length; i++) {
    cost = cost + products[i].cost;
    productsSelected.push({
      id: products[i].id,
      name: products[i].name,
      cost: products[i].cost,
    });
  }

  res.status(200).json({
    id: cart.id,
    productsSelected,
    cost,
  });
};

module.exports = {
  createCart,
  getCart,
  updateCart,
};
