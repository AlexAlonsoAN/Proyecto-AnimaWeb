require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");
const productSeeder = require("./productSeeder");
const categorySeeder = require("./categorySeeder");
const orderSeeder = require("./orderSeeder");

userSeeder();
adminSeeder();
categorySeeder();
productSeeder();
orderSeeder();
console.log("Se corrieron los seeders!");
