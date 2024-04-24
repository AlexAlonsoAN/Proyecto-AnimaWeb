const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");
const isUser = require("../middlewares/isUser");

const IsAdmin = require("../middlewares/isAdmin");
router.get("/", orderController.index);

router.get("/:id", orderController.show);

router.post("/", orderController.store);

router.patch("/:id", isUser, orderController.update);

router.delete("/:id", isUser, IsAdmin, orderController.destroy);

module.exports = router;
