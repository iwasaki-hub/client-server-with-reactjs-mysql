const express = require("express");
const router = express.Router();

const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "database",
});

router.use(cors());
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlInsert = "INSERT INTO register (username, password) VALUES (?, ?)";

  db.query(sqlInsert, [username, password], (err, result) => {
    console.log(result);
  });
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const sqlSelect =
    "SELECT * FROM register WHERE username = ? AND password = ?";

  db.query(sqlSelect, [username, password], (err, result) => {
    if (err) {
      res.send({ err: err });
    }

    if (result.length > 0) {
      res.send(result);
    } else {
      res.send({ message: "Wrong username/password combination!" });
    }
  });
});

module.exports = router;
