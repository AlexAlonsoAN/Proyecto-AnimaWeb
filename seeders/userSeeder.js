const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const bcrypt = require("bcryptjs")

async function userSeeder() {
  const users = [];

  for (let i = 0; i < 20; i++) {
    const name = faker.person.firstName();
  
    const newUser = {
      name,
      surname: faker.person.lastName(),
      email: faker.internet.email({ firstName: name }),
      address: "Avenida 123",
      phonenumber: faker.phone.number(),
     
    };
    const hashedPassword = await bcrypt.hash("123",10);
    newUser.password=hashedPassword
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
