const fs = require("fs");


var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-date.json')
    return JSON.parse(notesString);
  } catch (e) {
    return [];

  }

};

var logNote = (note) => {

  console.log("--")
  console.log("Title: " + note.title);
  console.log("Body: " + note.body);
}

var saveNotes = (notes) => {
  fs.writeFileSync(`notes-date.json`, JSON.stringify(notes));
};



var addNote = function(title, body) {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter( (note) => note.title === title);
  if (duplicateNotes.length === 0){
    notes.push(note)
    saveNotes(notes);
    return note;
  }

};

var getAll = function(){
  debugger;
  return fetchNotes();

};

var getNote = function(title) {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];

}

var removeNote = function(title) {

  var notes = fetchNotes();
  var filteredNotes = notes.filter( (note) => note.title != title)
  saveNotes(filteredNotes);
   return notes.length !== filteredNotes.length;



}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
