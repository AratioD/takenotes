const mongoose = require('mongoose')

// Model for creating a industrial ticket to service system.
const Ticket = mongoose.model('Ticket', {


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

module.exports = Ticket