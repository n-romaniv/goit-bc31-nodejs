const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  content: {
    type: Buffer,
    required: true,
  },
  mediaType: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["STUDENT", "TEACHER"],
  },
  profilePhoto: {
    type: photoSchema,
  },
  description: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
