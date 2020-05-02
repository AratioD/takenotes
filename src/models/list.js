const mongoose = require('mongoose')
// const validator = require('validator')
// require('.src/db/mongoose')

// List profession and time slot
const List = mongoose.model('List', {

    name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },
})


module.exports = List