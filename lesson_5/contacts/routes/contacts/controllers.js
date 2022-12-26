const contactsService = require("../../services/contacts");

const findContact = async (req, res) => {
  const id = req.params.id;
  const contact = contactsService.findContact(id);

  res.send(contact);
};

const createContact = async (req, res) => {
  const contact = req.body;
  await contactsService.createContact(contact);

  res.status(201).end();
};

module.exports = {
  findContact,
  createContact,
};
