require("dotenv").config();
const runAllSeeders = require("./userSeeder");

userSeeder();
console.log("Se corrieron los seeders!");
