// //explore how json works

// var obj = {
//   name: "Jake"
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// var personString = '{"name":"Jake","age":27}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require("fs"); //core so no npm

var origionalNote = {
  title: "Some Title",
  body: "Some Body"
};

var origionalNoteString = JSON.stringify(origionalNote);

fs.writeFileSync("notes.json", origionalNoteString);

var noteString = fs.readFileSync("notes.json");

var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note);
