const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");
const isUser = require("../middlewares/isUser");

router.post("/", userController.store);

router.use(
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] })
);

router.get("/", userController.index);

router.get("/:id", userController.show);

router.patch("/:id", userController.update);

router.delete("/:id", userController.destroy);

module.exports = router;
