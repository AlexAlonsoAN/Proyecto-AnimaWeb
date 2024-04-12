const { Sequelize } = require("sequelize");

const User = require("./User");
const Admin = require("./Admin");
const Order = require("./Order");
const Product = require("./Product");
const Categorie = require("./Categorie");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  }
);

User.initModel(sequelize);
Admin.initModel(sequelize);
Order.initModel(sequelize);
Product.initModel(sequelize);
Categorie.initModel(sequelize);



module.exports = {
  sequelize,
  User,
  Admin,
  Order,
  Product,
  Categorie,
};
