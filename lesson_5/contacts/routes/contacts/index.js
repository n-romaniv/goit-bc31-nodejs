const express = require("express");

const { findContact, createContact } = require("./controllers");
const { contactSchema } = require("./schemas");

const router = express.Router();

router.get("/:id", findContact);
router.post("/", validator(contactSchema), createContact);

module.exports = router;
