const fs = require('fs')

const getNotes = function () {
    return 'my notes areee'
}

const addNote = function (title, body) {
    const notes = loadNotes()

    notes.push({
        title: title,
        body: body

    })
    console.log(notes)
    saveNotes(notes)

}

const saveNotes = function(notes) {
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
    addNote: addNote
}