const express = require("express");
const router = express.Router();
const { Product } = require("../models");
const productController = require("../controllers/userController");
// index
router.get("/", async (req, res) => {
  const articles = await Article.findAll();
  return res.json(articles);
});
// show
router.get("/id:", async (req, res) => {
  const articles = await Article.findAll();
  return res.json(articles);
});

router.post("/", async (req, res) => {
  const { title, content, userId } = req.body;
  await Article.create({ title, content, userId });
  return res.send("El articulo fue creado con éxito!");
});

module.exports = router;
