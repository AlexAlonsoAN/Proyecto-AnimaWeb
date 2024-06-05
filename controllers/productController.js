const { Product } = require("../models");

const productController = {
  index: async (req, res) => {
  
    const product = await Product.findAll();
    return res.json(product);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    return res.json(product);
  },
  store: async (req, res) => {
    const { name, description, price, pics, stock, featured } = req.body;
    await Product.create({ name, description, price, pics, stock, featured });
    return res.send("Product was succesfully created!");
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { name, description, price, pics, stock, featured } = req.body;

    const product = await Product.findByPk(id);

    if (name) product.name = name;
    if (description) product.description = description;
    if (price) product.price = price;
    if (pics) product.pics = pics;
    if (stock) product.stock = stock;
    if (featured) product.featured = featured;

    await product.save();

    return res.send("Product was succesfully updated!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    await Product.destroy({
      where: {
      id: product.id,
      },
     });
    return res.send("Product was succesfully deleted!");
  },
};

module.exports = productController;
