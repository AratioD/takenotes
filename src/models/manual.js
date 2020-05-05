const mongoose = require('mongoose')

// Model for a Manual profession and time slot
const Manual = mongoose.model('Manual', {


    urgency: {
        type: String, enum: ['high', 'middle', 'low'],
        require: true,
        trim: true,
    },

    device: {
        type: String, enum: ['pump', 'excavator', 'pipe', 'filters', 'valves', 'vessel', 'heat exchanger', 'generator', 'electrical equipment', 'other'],
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

module.exports = Manual