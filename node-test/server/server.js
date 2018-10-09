const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

var users = [
  {
    name: "Jake",
    age: 27
  },
  {
    name: "Old Pap",
    age: 16
  },
  {
    name: "Stank",
    age: 4
  }
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(3000);

module.exports.app = app;
