const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, { dbName: "main" })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error(error);
    throw error;
  });
