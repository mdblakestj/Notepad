const fs = require("fs");
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
   describe: 'Title of note',
   demand: true,
   alias: "t"
 }

const bodyOptions = {
  describe: "Note content",
  demand: true,
  alias: "b"
}


const argv = yargs
  .command('add', 'Add a new note',{
   title: titleOptions,
   body: bodyOptions
  })
  .command('list', 'List all Notes')
  .command('remove', 'Remove a note', {
    title: titleOptions
  })
  .command('read', 'Read note', {
    title: titleOptions
  })
  .help()
  .argv;

var command = argv._[0]
console.log('Command: ', command);




// console.log('Process', process.argv);
//
// console.log('yargs', argv);

if (command === 'add'){

  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("Note Saved")
    notes.logNote(note);
  } else {
    console.log("Note name taken")
  }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing all ${allNotes.length} notes`);
    allNotes.forEach((note) => {
      notes.logNote(note);
    })
} else if (command === 'remove'){
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was removed' : "Note not found";
  console.log(message);
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  if (note) {
    notes.logNote(note);
  } else {
    console.log("Note not found");
  }
} else {
  console.log('command not recognized');
}
