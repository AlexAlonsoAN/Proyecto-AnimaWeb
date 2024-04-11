const express = require("express");
const router = express.Router();
const { User } = require("../models");
const userController = require("../controllers/userController");
const { update } = require("../models/User");

router.get("/", userController.index);

router.get("/:id", userController.show);

router.post("/", userController.store);

router.patch("/:id", update);

router.delete("/:id", userController.destroy);

module.exports = router;
