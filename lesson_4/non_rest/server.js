const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(cors()).use(morgan("combined"));

// RPC – Remote Procedure Calls

app.all("/findContact", (req, res) => {});
app.all("/listContacts", (req, res) => {});
app.all("/createContact", (req, res) => {});
app.all("/updateContact", (req, res) => {});
app.all("/viewUser", (req, res) => {});
app.all("/listFriends", (req, res) => {});

app.post("/api/contacts");
app.get("/api/contacts/:id");
app.put("/api/contacts/:id");

app.listen(3000, () => {
  console.log("Listening");
});
