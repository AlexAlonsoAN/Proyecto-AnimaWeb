const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs");

async function userSeeder() {
  const users = [];
  const hashedPassword = await bcrypt.hash("123", 10);
  for (let i = 0; i < 20; i++) {
    const name = faker.person.firstName();
    const newUser = {
      name,
      surname: faker.person.lastName(),
      email: faker.internet.email({ firstName: name }),
      address: "Avenida 123",
      password: hashedPassword,
      phonenumber: faker.phone.number(),
    };
    users.push(newUser);
  }
  try {
    await User.bulkCreate(users);
    console.log("User seeder is running!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = userSeeder;
