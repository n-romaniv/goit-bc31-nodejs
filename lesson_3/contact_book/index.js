const express = require("express");

const app = express();

app
  .use((req, res, next) => {
    console.log("Received request on", req.url);
    next();
  })
  .use(express.json());

app.get("/contacts", (req, res) => {});

app.get("/contacts/:id", (req, res) => {
  const id = req.params.id;
  const contact = findById(id);

  res.send(contact);
});

app.post("/contacts", (req, res) => {
  console.log(req.body.name);
  res.end("Received");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
