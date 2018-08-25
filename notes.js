const fs = require("fs");

console.log('Starting Notes ')

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-date.json')
    return JSON.parse(notesString);
  } catch (e) {
    return [];

  }

};

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
  console.log('listing notes');
};

var getNote = function(title) {
  var filename = `${title}.json`;
  console.log(filename);
  var noteString = fs.readFileSync(filename)
  var note = JSON.parse(noteString);
  console.log(note.body);

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
  removeNote
};
