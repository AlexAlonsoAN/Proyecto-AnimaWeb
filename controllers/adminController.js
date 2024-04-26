const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

const adminController = {
  index: async (req, res) => {
    const admins = await Admin.findAll();
    return res.json(admins);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const admin = await admin.findByPk(id);
    return res.json(admin);
  },
  store: async (req, res) => {
    const { name, surname, email, password } = req.body;
    await Admin.create({ name, surname, email, password });
    return res.send("Admin was succesfully created!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, password } = req.body;

    const admin = await admin.findByPk(id);

    if (firstname) admin.firstname = firstname;
    if (lastname) admin.lastname = lastname;
    if (email) admin.email = email;
    if (password) admin.password = password;

    await admin.save();
    return res.send("Admin was succesfully updated!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const admin = await Admin.findByPk(id);
    await Admin.destroy({
      where: {
      id: admin.id,
      },
     });
    return res.send("Admin was succesfully deleted!");
  },
};

module.exports = adminController;
