const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const { expressjwt: checkJwt } = require("express-jwt");
const isUser = require("../middlewares/isUser");


router.get("/", userController.index);
router.post("/", userController.store);

router.get("/:id", userController.show);


router.use(
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] })
);
router.patch("/:id", userController.update);

router.delete("/:id", userController.destroy);

module.exports = router;
