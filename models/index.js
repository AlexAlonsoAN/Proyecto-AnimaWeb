const { Sequelize } = require("sequelize");

const User = require("./User");
const Admin = require("./Admin");
const Order = require("./Order");
const Product = require("./Product");
const Category = require("./Category");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    dialectModule : require("pg"),
    logging: false,
  }
  
);

User.initModel(sequelize);
Admin.initModel(sequelize);
Order.initModel(sequelize);
Category.initModel(sequelize);
Product.initModel(sequelize);

Product.belongsTo(Category);
Category.hasMany(Product);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  sequelize,
  User,
  Admin,
  Order,
  Product,
  Category,
};
