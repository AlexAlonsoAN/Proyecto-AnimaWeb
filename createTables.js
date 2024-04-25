require("dotenv").config();
const { sequelize } = require("./models");

async function createTables() {
  await sequelize.sync({ force: true });
  console.log("Tables have been created succesfully!");
}

createTables();
