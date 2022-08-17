const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("user page");
});

router.get("/info", (req, res) => {
  res.send("user info page");
});

router.get("/:id", (req, res) => {
    res.send(`get the user id : ${req.params.id}`)
})

module.exports = router;
