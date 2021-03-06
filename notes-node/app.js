const fs = require("fs");
const notes = require("./notes");
const _ = require("lodash");
const yargs = require("yargs");
var titleObject = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};
var bodyObject = {
  describe: "Body of note",
  demand: true,
  alias: "b"
};
const argv = yargs
  .command("add", "Add a new note", {
    title: titleObject,
    body: bodyObject
  })
  .command("list", "List all notes")
  .command("read", "Read a specific note", {
    title: titleObject
  })
  .command("remove", "Remove a specific note", {
    title: titleObject
  })
  .help().argv;
var command = argv._[0];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note added successfully!");
    notes.logNote(note);
  } else {
    console.log("An error occoured!");
  }
} else if (command === "list") {
  var allNotes = notes.getAll();
  console.log(`Printing ${allNotes.length} note(s)`);
  allNotes.forEach(note => {
    notes.logNote(note);
  });
} else if (command === "read") {
  var noteToRead = notes.readNote(argv.title);
  if (noteToRead) {
    console.log("Your Requested Note");
    notes.logNote(noteToRead);
  } else {
    console.log("The requested note does not exist!");
  }
} else if (command === "remove") {
  var isRemoved = notes.removeNote(argv.title);
  if (isRemoved === true) {
    console.log("Succesfully removed: ", argv.title);
  } else {
    console.log("That note does not exist");
  }
} else {
  console.log("Command not recognized");
}
