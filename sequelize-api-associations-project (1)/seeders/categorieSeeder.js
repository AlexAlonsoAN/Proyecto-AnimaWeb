const { faker } = require("@faker-js/faker");
const { Categorie } = require("../models");

async function categorieSeeder() {
  const categories = [
    {
      name: "Categoria1",
    },
    {
      name: "Categoria2",
    },
    {
      name: "Categoria3",
    },
  ];
  try {
    await Categorie.bulkCreate(categories);
    console.log("Se corrió el seeder de categorias");
  } catch (err) {
    console.log(err);
  }
}

module.exports = categorieSeeder;
