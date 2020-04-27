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
<<<<<<< HEAD
            type: 'float'
        },
        startTime: {
            describe: 'start time',
=======
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Removed note text',
>>>>>>> master
            demandOption: true,
            type: 'float'
        },
<<<<<<< HEAD
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
=======
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Print the command
yargs.command({
    command: 'list',
    describe: 'print the note',
    // builder: {
    //     title: {
    //         describe: 'list notes text',
    //         demandOption: true,
    //         type: 'string'
    //     }
    // },
    handler() {
        // console.log('Print the list' + yargs.title)
        notes.listNotes()
>>>>>>> master
    }
})



// Read the command
yargs.command({
    command: 'read',
    describe: 'read data',
    builder: {
        title: {
            describe: 'list text',
            demandOption: true,
            type: 'string'
        }
    },
<<<<<<< HEAD
    handler: function (argv) {
        const print = notes.loadNotes(argv.title)
        console.log(print)
=======
    handler(argv) {
        notes.readNote(argv.title)
>>>>>>> master
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
