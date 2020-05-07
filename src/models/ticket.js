const mongoose = require('mongoose')

// Model for creating a industrial ticket to service system.
const ticketSchema = new mongoose.Schema({

    status: {
        type: String, enum: ['open', 'closed'],
        require: true,
        trim: true,
    },

    //1=high, 2=middle, 3=low
    urgency: {
        type: Number, enum: [1, 2, 3],
        require: true,
        trim: true,
    },

    device: {
        type: String, enum: ['pump', 'conveyor', 'pipe', 'filters', 'valve', 'vessel', 'heat exchanger', 'generator', 'electrical equipment', 'other'],
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

}, {
    timestamps: true
})


const Ticket = mongoose.model('Ticket', ticketSchema)

module.exports = Ticket