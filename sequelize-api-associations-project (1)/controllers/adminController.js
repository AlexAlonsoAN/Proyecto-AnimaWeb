const { Admin } = require("../models");
const { findByPk } = require("../models/User");

const adminController = {
  index: async (req, res) => {
    const admins = await Admin.findAll();
    return res.json(admins);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const admin = await admin.findByPk(id);
    return res.jason(admin);
  },
  store: async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    await Admin.create({ firstname, lastname, email, password });
    return res.send("El admin fue creado con éxito!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, password } = req.body;

    
  },
  destroy: async (req, res) => {},
};

module.exports = adminController;
