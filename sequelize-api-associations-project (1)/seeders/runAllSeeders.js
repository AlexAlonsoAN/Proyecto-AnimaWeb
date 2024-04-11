require("dotenv").config();
const userSeeder = require("./userSeeder");

userSeeder();
console.log("Se corrieron los seeders!");
