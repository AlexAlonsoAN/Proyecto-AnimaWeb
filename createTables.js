require("dotenv").config();
const {
  sequelize,
} = require("./sequelize-api-associations-project (1)/models");

async function createTables() {
  await sequelize.sync({ force: true });
  console.log("¡Las tablas fueron creadas!");
}

createTables();
