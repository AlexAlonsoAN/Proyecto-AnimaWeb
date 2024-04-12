const { Admin } = require("../models");

const adminController = {
  index: async (req, res) => {},
  show: async (req, res) => {},
  store: async (req, res) => {
    const { title, content, userId } = req.body;
    await Admin.create({ title, content, userId });
    return res.send("El admin fue creado con éxito!");
  },
  update: async (req, res) => {},
  destroy: async (req, res) => {},
};

module.exports = adminController;
