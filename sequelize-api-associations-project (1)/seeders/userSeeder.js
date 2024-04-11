const { faker } = require("@faker-js/faker");
const { User } = require("../models");

async function userSeeder() {
  const users = [];
  for (let i = 0; i > 20; i++) {
    const name = faker.person.fullname();
    const newUser = {
      name,
      surname: faker.internet.userName,
      email: faker.internet.email({ firstname: name }),
      // address: faker.,
      phonenumber: faker.phone.number(),
      password: "123",
    };
    users.push(newUser);
  }
  await User.create(newUser);
  console.log("Se corrió el seeder de usuarios");
}

module.exports = userSeeder;
