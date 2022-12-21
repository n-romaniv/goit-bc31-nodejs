const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors()).use(morgan("combined"));

app.get("/api/users", (req, res) => {});

app.listen(3000, () => {
  console.log("Listening");
});
