const express = require("express");
const routes = require("./routes");
require("./database");

const app = express();

app.use(routes);

module.exports = app;