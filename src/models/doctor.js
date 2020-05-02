const mongoose = require('mongoose')
// const validator = require('validator')
// require('.src/db/mongoose')

// Doctor profession and time slot
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


// // Doctor profession and time slot
// const Doctor = mongoose.model('Doctor', {
//     profession: {
//         type: String
//     },
//     name: {
//         type: String
//     },
//     time: {
//         type: Number
//     }
// })


const test = new Doctor({
    profession: 'puoskari',
    name: 'veefdfdfdfdfdra',
    time: 2
})

test.save().then(() => {
    console.log(test)
}).catch((error) => {
    console.log('error', error)
})


module.exports = Doctor