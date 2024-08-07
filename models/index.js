const { Sequelize } = require("sequelize");

const User = require("./User");
const Product = require("./Product");
const Order = require("./Order");
const Admin = require("./Admin");
const Category = require("./Category");
const OrderProducts = require("./OrderProducts");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    dialectModule: require("pg"),
    logging: false,
  }
);

User.initModel(sequelize);
Product.initModel(sequelize);
Order.initModel(sequelize);
Admin.initModel(sequelize);
Category.initModel(sequelize);
OrderProducts.initModel(sequelize);

User.hasMany(Order);
Order.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

Order.belongsToMany(Product, { through: OrderProducts });
Product.belongsToMany(Order, { through: OrderProducts });

module.exports = {
  sequelize,
  User,
  Product,
  Order,
  Admin,
  Category,
  OrderProducts,
};
