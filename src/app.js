const express = require("express");
const routes = require("./routes");
require("./database");

const app = express();

//dizemos para o express que ele pode aceitar o json
app.use(express.json());

app.use(routes);

module.exports = app;