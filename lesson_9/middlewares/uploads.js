const multer = require("multer");

const uploads = multer({ dest: "public/" });

module.exports = uploads;
