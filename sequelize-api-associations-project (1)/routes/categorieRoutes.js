const express = require("express");
const router = express.Router();
const { Article } = require("../models");

router.get("/", async (req, res) => {
  const articles = await Article.findAll();
  return res.json(articles);
});


router.get("/", categorieController.index);

router.post("/", categorieController.store);


router.post("/", async (req, res) => {
  // console.log(req.body);
  const { title, content, userId } = req.body;
  await Article.create({ title, content, userId });
  return res.send("El articulo fue creado con éxito!");
});

module.exports = router;
