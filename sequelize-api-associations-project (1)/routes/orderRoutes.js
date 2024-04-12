const express = require("express");
const router = express.Router();

router.get("/", orderController.index);

router.get("/:id", orderController.show);

router.post("/", orderController.store);

router.patch("/:id", orderController.update);

router.delete("/:id", orderController.destroy);

router.get("/", async (req, res) => {
  const articles = await Article.findAll();
  return res.json(articles);
});

router.post("/", async (req, res) => {
  // console.log(req.body);
  const { title, content, userId } = req.body;
  await Article.create({ title, content, userId });
  return res.send("El articulo fue creado con éxito!");
});

module.exports = router;
