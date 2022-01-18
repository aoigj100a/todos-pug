const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const routes = require("./routes");
require("./config/mongoose");

const app = express();
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(routes);

app.listen(3000, () => {
  console.log("App is running on http://localhost:3000");
});
