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
      type: faker.commerce.product(),
    };
    products.push(newProduct);
  }
  try {
    await Product.bulkCreate(products);
    console.log("Se corrió el seeder de usuarios");
  } catch (err) {
    console.log(err);
  }
}

module.exports = productSeeder;
