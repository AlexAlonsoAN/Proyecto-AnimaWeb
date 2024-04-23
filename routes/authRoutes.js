const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");


router.post("/", checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
IsAdmin,  authController.getToken);

module.exports = router;
