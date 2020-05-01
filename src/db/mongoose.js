const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/book-doctor-api'), {
    useNewUrlParser: true,
    useCreateIndex: true
}

// Doctor profession and time slot
const Doctor = mongoose.model('Doctor', {

    profession: {
        type: String
    },
    name: {
        type: String
    },
    time: {
        type: Number
    }
})

const test = new Doctor({
    profession: 'yleislaakari',
    name: 'simo',
    time: 1
})

test.save().then(() => {
    console.log(test)
}).catch((error) => {
    console.log('error', error)
})