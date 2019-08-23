const express = require("express");
const router = express.Router();
const Model = require("../models/exploreobjects.model.js");

// Submit Test
router.post("/", async (req, res) => {
  try {
    const posts = await Model.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
