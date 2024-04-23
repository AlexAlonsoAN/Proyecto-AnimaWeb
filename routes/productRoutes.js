const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.index);

router.get("/:id", productController.show);

router.post(
  "/",
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  IsAdmin,
  productController.store
);

router.patch(
  "/:id",
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  IsAdmin,
  productController.update
);

router.delete(
  "/:id",
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  IsAdmin,
  productController.destroy
);

module.exports = router;
