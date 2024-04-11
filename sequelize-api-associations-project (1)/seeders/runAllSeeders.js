require("dotenv").config();
const userSeeder = require("./userSeeder");
const adminSeeder = require("./adminSeeder");
const productSeeder = require("./productSeeder")

userSeeder();
adminSeeder();
productSeeder();
console.log("Se corrieron los seeders!");

  
