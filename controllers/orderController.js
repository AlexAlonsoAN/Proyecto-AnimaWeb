const { Product, Order } = require("../models");

const orderController = {
  index: async (req, res) => {
    const order = await Order.findAll({ include: "user" });
    return res.json(order);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    return res.json(order);
  },
  store: async (req, res) => {
    try {
      const order = req.body;
      for (const product of order.productList) {
        const productInDb = await Product.findByPk(product.id);
        if (productInDb.stock < product.qty) {
        }
        product.price = productInDb.price;
      }
      order.status = "pending";

      for (const product of order.productList) {
        const productInDb = await Product.findByPk(product.id);

        productInDb.stock = productInDb.stock - product.qty;
      }
      order.userId = 1;
      await Order.create(order);
      res.send("Your order has been saved!");
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    order.status = "declined";
    await order.save();
    console.log(order);
    res.send("Your order has been saved!");
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    order.destroy;
    console.log("Your order was succesfully deleted!");
  },
};

module.exports = orderController;
