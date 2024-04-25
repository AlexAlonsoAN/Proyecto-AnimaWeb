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

    const user = await Product.findByPk(id);

    if (name) Product.name = name;
    if (description) Product.description = description;
    if (price) Product.price = price;
    if (pics) Product.pics = pics;
    if (stock) Product.stock = stock;
    if (featured) Product.featured = featured;

    await product.save();

    return res.send("Product was succesfully updated!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    product.destroy;
    console.log("Product was succesfully deleted!");
  },
};

module.exports = productController;
