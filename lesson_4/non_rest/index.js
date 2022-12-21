class ContactBookProxy {
  findContact(id) {
    return fetch(`/findContact?id=${id}`);
  }

  listContacts() {
    return fetch("/listContact");
  }
}

const contactBook = new ContactBookProxy();

// ...

button.addEventListener("click", () => {
  const id = input.textContent;
  const contact = contactBook.findContact(id);

  // ...
});
