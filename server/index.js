const express = require("express");
const app = express();

app.use(mylogger)

const userRouter = require("./routes/user");
const apiRouter = require("./routes/api");
const registerRouter = require("./routes/register")

// app.use(express.static("public"));

app.set("view engine", "ejs");

// ルーティング
app.use("/user", userRouter);
app.use("/api", apiRouter);
app.use("/register",registerRouter )


app.get("/", (req, res) => {
  res.render("index", {text: "Nodejs and Express"})
})
























// ミドルウェア
function mylogger(req, res, next){
  console.log(req.originalUrl);
  next();
}

app.listen(3001, () => {
  console.log("running on port 3001");
});
