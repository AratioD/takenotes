const fs = require('fs')
const chalk = require('chalk')

<<<<<<< HEAD
const getNotes = function () {
    return 'my notes areee'
}

const addNote = function (title, time, startTime, day, month, year) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function (note) {
        console.log(startTime)
        return note.startTime === startTime
    })

    console.log("duplicates", duplicateNotes)
    if (duplicateNotes.length === 0) {
=======
const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
>>>>>>> master
        notes.push({
            title: title,
            time: time,
            startTime: startTime,
            day: day,
            month: month,
            year: year
        })
        console.log(notes)
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note already taken!'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('Note NOT removed!'));
    }
    saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


<<<<<<< HEAD
const loadNotes = function (keyword) {

    // try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    // return JSON.parse(dataJSON)
    // } catch (e) {
    // return []
    // }
=======
const loadNotes = () => {
>>>>>>> master


}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('YOUR NOTES'))
    const listNotes = notes.forEach(element => {
        console.log(chalk.green.inverse(element.title) + ' body--> ' + chalk.red.inverse(element.body))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    debugger

    if (note) {
        console.log(chalk.green.inverse(note.title))
        console.log(chalk.red.inverse(note.body))
    } else {
        console.log(chalk.red.inverse('no note found'))
    }
}


//notes.filter((note) => note.title !== title)
//module exports imports these modules to other files use
module.exports = {
<<<<<<< HEAD
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes
=======
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
>>>>>>> master
}