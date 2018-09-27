console.log("Starting app.js");

const fs = require("fs");
const notes = require("./notes");
const _ = require("lodash");
const yargs = require("yargs");

const argv = yargs.argv;
var command = argv._[0];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note added successfully!");
    console.log("_______________________");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("An error occoured!");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.readNote(argv.title);
} else if (command === "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Command not recognized");
}
