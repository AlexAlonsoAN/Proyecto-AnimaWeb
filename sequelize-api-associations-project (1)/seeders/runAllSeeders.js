require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");
const productSeeder = require("./productSeeder");
const categorieSeeder = require("./categorieSeeder");

userSeeder();
adminSeeder();
productSeeder();
categorieSeeder();
console.log("Se corrieron los seeders!");
