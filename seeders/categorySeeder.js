const { faker } = require("@faker-js/faker");
const { Category } = require("../models");

async function categorySeeder() {
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
    await Category.bulkCreate(categories);
    console.log("Se corrió el seeder de categorias");
  } catch (err) {
    console.log(err);
  }
}

module.exports = categorySeeder;
