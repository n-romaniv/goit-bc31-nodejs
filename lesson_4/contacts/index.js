const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const rootRouter = require("./routes");

const app = express();

app
  .use(morgan("combined"))
  .use(cors())
  .use(express.json())
  .use("/api", rootRouter);

app.listen(3000, () => {
  console.log("Listening");
});
