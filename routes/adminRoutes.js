const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const { expressjwt: checkJwt } = require("express-jwt");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", adminController.index);

router.get("/:id", adminController.show);

router.post(
  "/",
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  adminController.store
);

router.patch("/:id", adminController.update);

router.delete("/:id", adminController.destroy);

module.exports = router;
