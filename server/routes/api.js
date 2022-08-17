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

router.get("/get", (req, res) => {
  const sqlSelect = "SELECT * FROM movie_reviews";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

router.post("/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES (?, ?)";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(result);
  });
});

router.delete("/delete/:movieName", (req, res) => {
  const name = req.params.movieName;

  const sqlDelete = "DELETE FROM movie_reviews WHERE movieName = ?";

  db.query(sqlDelete, name, (err, result) => {
    if (err) console.log(err);
  });
});

router.put("/update", (req, res) => {
  const name = req.body.movieName;
  const review = req.body.movieReview;

  const sqlUpdate =
    "UPDATE  movie_reviews SET movieReview = ? WHERE movieName = ?";

  db.query(sqlUpdate, [review, name], (err, result) => {
    if (err) console.log(err);
  });
});


module.exports = router;
