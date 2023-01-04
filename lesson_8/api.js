const express = require("express");

const userMiddleware = require("./middlewares/user");

const studentsRouter = require("./students/router");
const coursesRouter = require("./courses/router");
const usersRouter = require("./users/router");

const rootRouter = express.Router();

rootRouter.use("/students", userMiddleware, studentsRouter);
rootRouter.use("/courses", userMiddleware, coursesRouter);
rootRouter.use("/auth", usersRouter);

module.exports = rootRouter;
