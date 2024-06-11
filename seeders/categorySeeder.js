const { faker } = require("@faker-js/faker");
const { Category } = require("../models");

async function categorySeeder() {
  const categories = [
    {
      name: "Mangas",
    },
    { name: "Comics" },
    { name: "Cartas" },
  ];
  try {
    await Category.bulkCreate(categories);
    console.log("Category seeder is running!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = categorySeeder;
