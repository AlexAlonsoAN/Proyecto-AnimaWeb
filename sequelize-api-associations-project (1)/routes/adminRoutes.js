const express = require("express");
const router = express.Router();
const { Admin } = require("../models");
const adminController = require("../controllers/adminController");
const { update } = require("../models/Admin");

router.post("/", async (req, res) => {
  const { title, content, userId } = req.body;
  await Article.create({ title, content, userId });
  return res.send("El articulo fue creado con éxito!");
});

module.exports = router;
