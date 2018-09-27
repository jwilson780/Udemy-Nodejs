console.log("Starting notes.js");

var addNote = (title, body) => {
  console.log("adding note", title, body);
};

var getAll = () => {
  console.log("Getting all notes...");
};

var readNote = title => {
  console.log("Getting required note", title);
};

var removeNote = title => {
  console.log("Deleting required note", title);
};
module.exports = {
  addNote,
  getAll,
  readNote,
  removeNote
};
