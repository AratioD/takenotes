const chalk = require('chalk')
const yargs = require('yargs')
const getNotes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// Create yargs version

// add new note
yargs.command({
    command: 'add',
    describe: 'Add new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Removed note text',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Removing the note' + yargs.title)
    }
})

// Print the command
yargs.command({
    command: 'list',
    describe: 'print the note',
    builder: {
        title: {
            describe: 'list notes text',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Print the list' + yargs.title)
    }
})

// Read the command
yargs.command({
    command: 'read',
    describe: 'read data',
    builder: {
        title: {
            describe: 'list notes text',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('Reading data' + yargs.title)
    }
})

// add, remove, read, list
console.log(yargs.argv)
