const fs = require("fs/promises");
const path = require("path");

const express = require("express");
const Joi = require("joi");

const router = express.Router();

const contactsDb = path.resolve(__dirname, "../contacts.json");

const findContacts = async (req, res) => {
  const searchId = req.params.id;
  const rawContacts = await fs.readFile(contactsDb, "utf-8");
  const contacts = JSON.parse(rawContacts);
  const contact = contacts.find(({ id }) => id === searchId);

  res.send(contact);
};

const createContact = async (req, res) => {
  const contact = req.body;
  const content = await fs.readFile(contactsDb, "utf-8");
  const contacts = JSON.parse(content);
  const duplicateContact = contacts.find((c) => c.name === contact.name);

  if (duplicateContact) {
    res.status(409).end();
    return;
  }

  contacts.push(contact);
  await fs.writeFile(contactsDb, JSON.stringify(contacts, undefined, 2));

  res.status(201).end();
};

const contactSchema = Joi.object({
  id: Joi.string()
    .regex(/^[0-9]*$/)
    .required(),
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .regex(/^[0-9]*$/)
    .required(),
});

const validator = (schema) => (req, res, next) => {
  const body = req.body;
  const validation = schema.validate(body);

  if (validation.error) {
    res.status(400).send(validation.error);
    return;
  }

  return next();
};

router.get("/:id", findContacts);
router.post("/", validator(contactSchema), createContact);

module.exports = router;
