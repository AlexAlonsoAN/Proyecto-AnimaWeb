const { Product, Order } = require("../models");

const orderController = {
  index: async (req, res) => {
    const order = await Order.findAll();
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

      await Order.create(order);
      res.send("orden guardada");
    } catch (err) {
      return res.json({ message: "ups!" });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    order.destroy;
    console.log("Orden eliminada con éxito");
  },
};

module.exports = orderController;
