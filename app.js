const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// Create yargs version

// add new note
yargs.command({
    command: 'add',
    describe: 'add new note',
    handler: function() {
        console.log('adding a new note!')
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note')
    }
})

// add, remove, read, list
console.log(yargs.argv)
