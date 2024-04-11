const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");

async function adminSeeder() {
  const admins = [];
  for (let i = 0; i < 20; i++) {
    const name = faker.person.firstName();
    const newAdmin = {
      name,
      surname: faker.person.lastName(),
      email: faker.internet.email({ firstName: name }),
      password: "123",
    };
    admins.push(newAdmin);
  }
  try {
    await Admin.bulkCreate(admins);
    console.log("Se corrió el seeder de admins");
  } catch (err) {
    console.log(err);
  }
}

module.exports = adminSeeder;
