const fs = require('fs')

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
        console.log('New note added!')
    } else {
        console.log('Note title taken!')
    }

}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


const loadNotes = function (title) {

    // try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    // } catch (e) {
    // return []
    // }

}


//module exports imports these modules to other files use
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    loadNotes: loadNotes
}