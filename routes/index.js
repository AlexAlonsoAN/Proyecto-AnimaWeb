require("dotenv").config();
const { expressjwt: checkJwt } = require("express-jwt");
const express = require("express");
const router = express.Router();
const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");
const categoryRoutes = require("./categoryRoutes");
const authRoutes = require("./authRoutes");
const IsAdmin = require("../middlewares/isAdmin");
const isUser = require("../middlewares/isUser");

router.use(express.json());

router.use(
  "/tokens",
  authRoutes
); // hecho

router.use("/users", userRoutes);

router.use(
  "/admins", // hecho
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  IsAdmin,
  adminRoutes
);

router.use("/products", productRoutes);
// hecho

router.use(
  // hecho 
  "/orders",
  checkJwt({ secret: process.env.DB_TOKEN_SECRET, algorithms: ["HS256"] }),
  
  orderRoutes
);

router.use("/categories", categoryRoutes);

module.exports = router;
