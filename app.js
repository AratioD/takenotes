const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')
console.log('DOCTOR RESERVATION SYSTEM 24/7 HOSPITAL')
// Create yargs version
var d = new Date();
var t = d.getTime();

console.log('object', d)
// add new note
yargs.command({
    command: 'add',
    describe: 'Make a new reservation',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        time: {
            describe: 'reserved time in hours',
            demandOption: true,
            type: 'float'
        },
        startTime: {
            describe: 'start time',
            demandOption: true,
            type: 'float'
        },
        day: {
            describe: 'time slot',
            demandOption: true,
            type: 'int'
        },
        month: {
            describe: 'month',
            demandOption: true,
            type: 'int'
        },
        year: {
            describe: 'year',
            demandOption: true,
            type: 'int'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.time, argv.startTime, argv.day, argv.month, argv.year)
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
    handler: function (argv) {
        const print = notes.loadNotes(argv.title)
        console.log(print)
    }
})

// // create remove command
// yargs.command({
//     command: 'remove',
//     describe: 'Remove a note',
//     builder: {
//         title: {
//             describe: 'Removed note text',
//             demandOption: true,
//             type: 'string'
//         },
//         body: {
//             describe: 'note body',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function () {
//         console.log('Removing the note' + yargs.title)
//     }
// })

// // Print the command
// yargs.command({
//     command: 'list',
//     describe: 'print the note',
//     builder: {
//         title: {
//             describe: 'list notes text',
//             demandOption: true,
//             type: 'string'
//         }
//     },
//     handler: function () {
//         console.log('Print the list' + yargs.title)
//     }
// })

// add, remove, read, list
console.log(yargs.argv)
