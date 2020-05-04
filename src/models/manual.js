const mongoose = require('mongoose')   

// Model for a Manual profession and time slot
const Manual = mongoose.model('Manual', {


    urgency: {
        type: String, enum: ['high', 'middle', 'low'],
        require: true,
        trim: true,
        validate(value) {
            if ((value !== 'high') || (value !== 'middle') || (value !== 'low') ) {
                throw new Error('ERROR! INVALID URGENCY VALUE!')
            }
        }
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

module.exports = Manual