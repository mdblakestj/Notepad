const fs = require("fs");

console.log('Starting Notes ')


var addNote = function(title, body) {
  var originalNote = {
    title: title,
    body : body
  };
  originalNoteString = JSON.stringify(originalNote);
  fs.writeFileSync(`${title}.json`, originalNoteString);

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
