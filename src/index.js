const express = require('express')
require('./db/mongoose')
const Doctor = require('./models/doctor')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// reserve an appointment to doctor
app.post('/doctor', (req, res) => {

    const doctor = new Doctor(req.body)

    doctor.save().then(() => {
        res.status(200).send(doctor)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

// get all users
app.get('/doctor', (req, res) => {

    Doctor.find({}).then((doctors) => {
        res.send(doctors)
    }).catch((e) => {
        res.status(500).send(e)
    })
})

//get a specific users
app.get('/doctor/:id', (req, res) => {

    const _id = req.params.id
    Doctor.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })
    // console.log(req.params)
    // Doctor.find({}).then((doctors) => {
    //     res.send(doctors)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})