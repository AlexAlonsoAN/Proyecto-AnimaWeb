const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { expressjwt: checkJwt } = require("express-jwt");

router.get("/", categoryController.index);
router.get("/:id", categoryController.show);
router.post(
  "/",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  categoryController.store
);
router.patch(
  "/:id",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  categoryController.update
);
router.delete(
  "/:id",
  checkJwt({ secret: process.env.TOKEN_SECRET, algorithms: ["HS256"] }),
  categoryController.destroy
);
module.exports = router;
