const { faker } = require("@faker-js/faker");
const { Categorie } = require("../models");

async function categorieSeeder() {
  const categories = [];
  for (let i = 0; i ; i++) {
    const name = faker.person.firstName();
    const newUser = {
      name,
      surname: faker.person.lastName(),
      email: faker.internet.email({ firstName: name }),
      address: "Avenida 123",
      phonenumber: faker.phone.number(),
      password: "123",
    };
    users.push(newUser);
  }
  try {
    await User.bulkCreate(users);
    console.log("Se corrió el seeder de usuarios");
  } catch (err) {
    console.log(err);
  }
}

module.exports = userSeeder;
