const express = require("express");

const studentsRouter = require("./students/router");
const coursesRouter = require("./courses/router");

const rootRouter = express.Router();

rootRouter.use("/students", studentsRouter);
rootRouter.use("/courses", coursesRouter);

module.exports = rootRouter;
