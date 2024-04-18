require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");
const productSeeder = require("./productSeeder");
const categorySeeder = require("./categorySeeder");

userSeeder();
adminSeeder();
categorySeeder();
productSeeder();
console.log("Se corrieron los seeders!");
