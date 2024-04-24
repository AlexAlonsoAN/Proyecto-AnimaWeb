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
    const { name } = req.body;
    await Category.create({
      name,
    });
    return res.send("Category was succesfully created!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    const Category = await Category.findByPk(id);

    if (name) Category.name = name;

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
