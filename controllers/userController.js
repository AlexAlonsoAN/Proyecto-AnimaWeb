const isUser = require("../middlewares/isUser");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

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
    const { name, surname, email, phonenumber, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    await User.create({
      name,
      surname,
      email,
      phonenumber,
      password: hashedPassword,
    });

    return res.send("User was succesfully created!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { name, surname, email, phonenumber, password } = req.body;

    const user = await User.findByPk(id);

    if (name) user.name = name;
    if (surname) user.surname = surname;
    if (email) user.email = email;
    if (password) user.password = password;
    if (phonenumber) user.phonenumber = phonenumber;

    await user.save();

    return res.send("User was succesfully updated!");
  },
  destroy: async (req, res) => {
    const { id } = req.params;

    const role = req.auth.role;
    const subId = req.auth.sub;
    if (role === "User" && id == subId) {
      await User.destroy({
        where: {
          id: subId,
        },
      });
      res.send(`User   was succesfully deleted!`);
    } else if (role === "Admin") {
      const user = await User.findByPk(id);
      await User.destroy({
        where: {
          email: user.email,
        },
      });

      res.send(`User   was succesfully deleted!`);
    } else {
      return res.send("No results");
    }
  },
};

module.exports = userController;
