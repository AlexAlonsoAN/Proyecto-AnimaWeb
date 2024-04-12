const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");
const categorieRoutes = require("./categorieRoutes");

router.use(express.json());
router.use("/users", userRoutes);
router.use("/admins", adminRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/categories", categorieRoutes);

module.exports = router;
