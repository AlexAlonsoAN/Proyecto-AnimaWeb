const { Categorie } = require("../models");

const categorieController = {
  index: async (req, res) => {
    const categorie = await Categorie.findAll();
    return res.json(categorie);
  },
  show: async (req, res) => {
    const { id } = req.params;
    const categorie = await Categorie.findByPk(id);
    return res.json(categorie);
  },
  store: async (req, res) => {
    const { firstname, lastname, email, password } = req.body;
    await Categorie.create({
      firstname,
      lastname,
      email,
      phonenumber,
      password,
    });
    return res.send("La categoría fue creada con éxito!");
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { firstname, lastname, email, phonenumber, password } = req.body;

    const categorie = await Categorie.findByPk(id);

    if (firstname) Categorie.firstname = firstname;
    if (lastname) Categorie.lastname = lastname;
    if (email) Categorie.email = email;
    if (password) Categorie.password = password;
    if (phonenumber) Categorie.phonenumber = phonenumber;

    await categorie.save();

    return res.send("Categoría modificada con éxito!");
  },
  destroy: async (req, res) => {
    router.get("/", async (req, res) => {});
  },
};

module.exports = categorieController;
