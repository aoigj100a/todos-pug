const express = require("express");
const mongoose = require("mongoose");
const Todo = require("./models/todo");
const app = express();

app.set("view engine", "pug");

mongoose.connect("mongodb://localhost/todo-list", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", () => {
  console.log("mongodb error!");
});

db.once("open", () => {
  console.log("mongodb connected!");
});

app.get("/", (req, res) => {
  Todo.find()
    .lean()
    .then((todos) => res.render("index", { todos }))
    .catch((error) => console.log(error));
});

app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
