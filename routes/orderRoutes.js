const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const { expressjwt: checkJwt } = require("express-jwt");
const isUser = require("../middlewares/isUser");
const IsAdmin = require("../middlewares/isAdmin");
const isAdmin = require("../middlewares/isAdmin");

router.get("/", orderController.index);

router.get("/:id", orderController.show);

router.post("/",  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
isUser,
orderController.store);

router.patch(
  "/:id",
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  isAdmin,
  orderController.update
);

router.delete(
  "/:id",
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  IsAdmin,
  orderController.destroy
);

module.exports = router;
