const mongoose = require('mongoose')
// const validator = require('validator')

// Model for a doctor profession and time slot
const Doctor = mongoose.model('Doctor', {

    profession: {
        type: String,
        require: true,
        trim: true

    },
    name: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },
    time: {
        type: Number,
        require: true,
        validate(value) {
            if (value < 0) {
                throw new Error('Time slot cannot be negative')
            }
        }
    }
})

module.exports = Doctor