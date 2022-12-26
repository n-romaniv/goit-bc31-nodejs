const db = require("../db");

const findContact = async (id) => {
  const contacts = db.collection("contacts");
  const contact = await contacts.findOne({ _id: id });

  return contact;
};

const createContact = async (contactData) => {
  const contacts = db.collection("contacts");

  await contacts.insertOne(contactData);
};

const updateContact = async (id, contactData) => {
  const contacts = db.collection("contacts");

  await contacts.updateOne({ _id: id }, contactData);
};

module.exports = {
  findContact,
  createContact,
  updateContact,
};
