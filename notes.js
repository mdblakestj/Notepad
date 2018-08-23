const fs = require("fs");

console.log('Starting Notes ')



var addNote = function(title, body) {
  var notes = [];
  var note = {
    title,
    body
  };

  

  console.log(duplicateNotes);

  try {
    var notesString = fs.readFileSync('notes-date.json')
    notes = JSON.parse(notesString);
  } catch (e) {
    console.log("error")

  }
  var duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0){
    notes.push(note)
    fs.writeFileSync(`notes-date.json`, JSON.stringify(notes));
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
  console.log('reomving', title);
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
