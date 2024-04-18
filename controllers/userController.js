const { User } = require("../models");

const userController = {
  // index: nombre que utilizamos para el método que trae todos los usuarios
  index: async (req, res) => {
    const users = await User.findAll();
    return res.json(users);
  },
  // show: nombre que utilizamos para el método que trae a uno de los usuarios
  show: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    return res.json(user);
  },
  store: async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    await User.create({ firstname, lastname, email, phonenumber, password });
    return res.send("User was succesfully created!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, phonenumber, password } = req.body;

    const user = await User.findByPk(id);

    if (firstname) user.firstname = firstname;
    if (lastname) user.lastname = lastname;
    if (email) user.email = email;
    if (password) user.password = password;
    if (phonenumber) user.phonenumber = phonenumber;

    await user.save();

    return res.send("User was succesfully updated!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    user.destroy;
    console.log("User was succesfully deleted!");
  },
};

module.exports = userController;
