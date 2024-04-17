const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");
const categoryRoutes = require("./categoryRoutes");
const authRoutes = require("./authRoutes");

router.use(express.json());
router.use("/users", userRoutes);
router.use("/tokens", authRoutes);

router.use("/admins", adminRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/categories", categoryRoutes);


module.exports = router;
