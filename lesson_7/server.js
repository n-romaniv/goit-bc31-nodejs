const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

require("./db");

dotenv.config();

const rootRouter = require("./api");

const app = express();

app
  .use(morgan("combined"))
  .use(cors())
  .use(express.json())
  .use("/api", rootRouter)
  .use((error, req, res, next) => {
    if (error instanceof mongoose.Error.DisconnectedError) {
      res.send(500);
    } else if (error instanceof mongoose.Error.DocumentNotFoundError) {
      res.send(404);
    }
  });

app.listen(3000, () => {
  console.log("Listening");
});
