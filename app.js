console.log('starting app');

const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const argv = yargs.argv;
var command = argv._[0]
console.log('Command: ', command);




// console.log('Process', process.argv);
//
// console.log('yargs', argv);

if (command === 'add'){

  var note = notes.addNote(argv.title, argv.body);
  console.log(note);
  if (note) {
    console.log("Note Saved")
    console.log("Title: " + note.title);
    console.log("Body: " + note.body);
  } else {
    console.log("Note name taken")
  }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : "Note not found";
  console.log(message);
} else if (command === 'read') {
  notes.getNote(argv.title);
} else {
  console.log('command not recognized');
}
