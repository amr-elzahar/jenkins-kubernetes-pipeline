const express = require("express");
const fs = require("fs");
const path = require("path");

const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, "../", "data", "data.json"))
);
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "overview.html"));
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const product = data.find((el) => el.id === +id);
  res.render("product", { data: product });
});

module.exports = router;
