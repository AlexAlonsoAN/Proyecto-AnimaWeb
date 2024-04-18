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
    const { firstname, lastname, email, password } = req.body;
    await Product.create({ firstname, lastname, email, phonenumber, password });
    return res.send("Product was succesfully created!");
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, phonenumber, password } = req.body;

    const user = await Product.findByPk(id);

    if (firstname) Product.firstname = firstname;
    if (lastname) Product.lastname = lastname;
    if (email) Product.email = email;
    if (password) Product.password = password;
    if (phonenumber) Product.phonenumber = phonenumber;

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