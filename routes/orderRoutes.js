const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");
const isUser = require("../middlewares/isUser");
const IsAdmin = require("../middlewares/isAdmin");

router.get("/", orderController.index);

router.get("/:id", orderController.show);

router.post("/", orderController.store);

router.patch(
  "/:id",
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  isUser,
  orderController.update
);

router.delete(
  "/:id",
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  isUser,
  IsAdmin,
  orderController.destroy
);

module.exports = router;
