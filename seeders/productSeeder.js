const { faker } = require("@faker-js/faker");
const { Product } = require("../models");

async function productSeeder() {
  const products = [];
  for (let i = 0; i < 20; i++) {
    const name = faker.commerce.productName();
    const newProduct = {
      name,
      price: faker.commerce.price(),
      description: faker.internet.email({ firstName: name }),
      stock: "5",
      type: faker.commerce.product(),
      categoryId: 1,
      fectured: false,
    };
    products.push(newProduct);
  }
  try {
    await Product.bulkCreate(products);
    console.log("Product seeder is running!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = productSeeder;
