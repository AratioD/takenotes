const mongoose = require('mongoose')

// Model for a Manual profession and time slot
const Manual = mongoose.model('Manual', {


    time: { type: Date, default: Date.now },

    status: {
        type: String, enum: ['open', 'closed'],
        require: true,
        trim: true,
    },

    urgency: {
        type: String, enum: ['high', 'middle', 'low'],
        require: true,
        trim: true,
    },

    device: {
        type: String, enum: ['pump', 'excavator', 'pipe', 'filters', 'valve', 'vessel', 'heat exchanger', 'generator', 'electrical equipment', 'other'],
        require: true,
        trim: true
    },

    description: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
    },

    worker: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,

    },
})

module.exports = Manual