const { readFile, writeFile } = require("fs/promises");
const rl = require("readline");
const { promisify } = require("util");

const { program } = require("commander");

const interface = rl.createInterface(process.stdin, process.stdout);
const question = promisify(interface.question).bind(interface);

program
  .command("find")
  .requiredOption("-n|--name [name]")
  .action((options) => findContact(options.name));
program.command("list").description("List all contacts").action(listContacts);
program
  .command("add")
  .description("Add a new contact")
  .requiredOption("-n|--name [name]", "Name of the contact")
  .requiredOption("-e|--email [email]", "Email of the contact")
  .requiredOption("--phone [phone]", "Phone of the contact")
  .action((options) => addContact(options));

const FILE = "./contacts.json";
program.parse(process.argv);

async function listContacts() {
  const content = await readFile(FILE, "utf-8");
  const contacts = JSON.parse(content);

  contacts.forEach((contact) => {
    console.log(
      `${contact.name}\nPhone number:\t${contact.phone}\nEmail:\t${contact.email}\n`
    );
  });
}

async function findContact(name) {
  const content = await readFile(FILE, "utf-8");
  const contacts = JSON.parse(content);

  const contact = contacts.find((c) => c.name.includes(name));

  console.log(
    `${contact.name}\nPhone number:\t${contact.phone}\nEmail:\t${contact.email}\n`
  );
}

async function addContact(contact) {
  const content = await readFile(FILE, "utf-8");
  const contacts = JSON.parse(content);
  const duplicateContact = contacts.find((c) => c.name === contact.name);

  if (duplicateContact !== undefined) {
    const answer = await question(
      "Contact with this name already exists. Overwrite? (y/n)\n"
    );

    if (answer.toLowerCase() === "y") {
      duplicateContact.phone = contact.phone;
      duplicateContact.email = contact.email;
    }
  } else {
    contacts.push(contact);
  }

  await writeFile(FILE, JSON.stringify(contacts, undefined, 2));
}
