const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { expressjwt: checkJwt } = require("express-jwt");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", categoryController.store);

router.use(
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  isAdmin
);

router.get("/", categoryController.index);

router.get("/:id", categoryController.index);

router.patch("/:id", categoryController.update);

router.delete("/:id", categoryController.destroy);

module.exports = router;
