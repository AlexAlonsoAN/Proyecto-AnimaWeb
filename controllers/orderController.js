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
      if(order.productList){
      for (const product of JSON.parse(order.productList)) {
        const productInDb = await Product.findByPk(product.id);
        if (productInDb.stock < product.qty) {
        }
        product.price = productInDb.price;
      }}
      order.status = "pending";

      for (const product of order.productList) {
        const productInDb = await Product.findByPk(product.id);

        productInDb.stock = productInDb.stock - product.qty;
      }
      order.userId = 1;
      await Order.create(order);
      res.send("orden guardada");
    } catch (err) {
      console.log(err);
      return res.json({ message: "error Order drop the table" });
    }
  },
  

  update: async (req, res) => {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    order.status = "declined";
    await order.save();
    console.log(order);
    res.send("save order!");
  },

  destroy: async (req, res) => {
    const { id } = req.params;
    const order = await Order.findByPk(id);
    await Order.destroy({
      where: {
      id: order.id,
      },
     });
 return res.send("Order was succesfully deleted!");
  },
};

module.exports = orderController;
