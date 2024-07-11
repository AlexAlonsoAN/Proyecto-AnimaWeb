const { faker } = require("@faker-js/faker");
const { Admin } = require("../models");
const bcrypt = require("bcryptjs");

async function adminSeeder() {
  const hashedPassword = await bcrypt.hash("123", 10);
  const permanentAdmin = {
    id: 1,
    name: "admin",
    surname: "Co",
    email: "admin@admin.com",
    password: "admin",
  };

  const admins = [permanentAdmin]; // Añadir permanentAdmin al array admins

  for (let i = 0; i < 20; i++) {
    const name = faker.person.firstName();
    const newAdmin = {
      name,
      surname: faker.person.lastName(),
      email: faker.internet.email({ firstName: name }),
      password: hashedPassword,
    };
    admins.push(newAdmin);
  }

  try {
    await Admin.bulkCreate(admins);
    console.log("Admin seeder is running!");
  } catch (err) {
    console.log(err);
  }
}

module.exports = adminSeeder;
