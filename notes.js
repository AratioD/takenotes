const fs = require('fs')

const getNotes = function () {
    return 'my notes areee'
}

const addNote = function (title, body) {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function (note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        console.log(notes)
        saveNotes(notes)
        console.log('New note added!')
    } else {
        console.log('Note title taken! Please provide a new one!')
    }
}

const removeNote = function (title) {
    const notes = loadNotes()
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title
    })
    saveNotes(notesToKeep)
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = function () {

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