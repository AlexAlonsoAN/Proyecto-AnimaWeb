const { Category } = require("../models");

const categoryController = {
  index: async (req, res) => {
    const category = await Category.findAll();
    return res.json(category);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    return res.json(category);
  },
  store: async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    await Category.create({
      firstname,
      lastname,
      email,
      phonenumber,
      password,
    });
    return res.send("Category was succesfully created!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, phonenumber, password } = req.body;

    const Category = await Category.findByPk(id);

    if (firstname) Category.firstname = firstname;
    if (lastname) Category.lastname = lastname;
    if (email) Category.email = email;
    if (password) Category.password = password;
    if (phonenumber) Category.phonenumber = phonenumber;

    await Category.save();

    return res.send("Category was succesfully updated!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    category.destroy;
    console.log("Category was successfully deleted!");
  },
};

module.exports = categoryController;
