const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'my notes areee111'
}

const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title ===title)

    if (!duplicateNote) {
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


const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('YOUR NOTES'))
    const listNotes = notes.forEach(element => {
        console.log(chalk.green.inverse(element.title) + " body--> " + chalk.red.inverse(element.body))
    });
}


//module exports imports these modules to other files use
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}