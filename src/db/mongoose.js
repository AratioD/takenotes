const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/book-doctor-api'), {
    useNewUrlParser: true,
    useCreateIndex: true
}

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
    profession: 'yleislaakari',
    name: 'jimo',
    time: 1
})

test.save().then(() => {
    console.log(test)
}).catch((error) => {
    console.log('error', error)
})