const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'my notes areee111'
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
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
    // const notesToKeep = notes.filter(function (note) {

    //     return note.title !== title
    // })
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length > notesToKeep.length) {
        // console.log(chalk.red.inverse('Note NOT removed!'));
           console.log(chalk.green.inverse('Note removed!'));
    } else {
        console.log(chalk.red.inverse('Note NOT removed!'));
        // console.log(chalk.green.inverse('Note removed!'));
    }
    saveNotes(notesToKeep)
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}


//module exports imports these modules to other files use
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}