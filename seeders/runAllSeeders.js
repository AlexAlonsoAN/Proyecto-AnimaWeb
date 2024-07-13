require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");
const productSeeder = require("./productSeeder");
const categorySeeder = require("./categorySeeder");
const orderSeeder = require("./orderSeeder");

categorySeeder();
userSeeder();
adminSeeder();
productSeeder();
orderSeeder();
console.log("All seeders are running!");
