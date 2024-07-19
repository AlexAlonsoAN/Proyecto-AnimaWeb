const { Category } = require("../models");

async function categorySeeder() {
  const category = [];

  category.push({ name: "Mates", img: "/public/images/mate.1.png" });
  category.push({ name: "Bombillas", img: "/public/images/bombilla.1.png" });
  category.push({ name: "Termos", img: "/public/images/termo.1.png" });
  category.push({ name: "Materas", img: "/public/images/matera.1.png" });

  await Category.bulkCreate(category);

  console.log("The category seeder ran!");
}

module.exports = categorySeeder;
