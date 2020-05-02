const express = require('express')
require('./db/mongoose')
const Doctor = require('./models/doctor')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// Create an appointment to doctor
app.post('/doctor', async (req, res) => {

    const doctor = new Doctor(req.body)

    try {
        await doctor.save()
        res.status(201).send(doctor)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Fetch all doctor appointments.
app.get('/doctor', async (req, res) => {

    try {
        const doctors = await Doctor.find({})
        res.send(doctors)
    } catch (error) {
        res.status(500).send(error)
    }
})


//Find time slots by name 
app.get('/doctor/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const doctor = await Doctor.findById(_id)
        if (!doctor) {
            return res.status(404).send()
        }
        res.send(doctor)
    } catch (error) {
        res.status(500).send()
    }
})

//Fetch a specific doctor all time slots.
app.get('/doctor/name', (req, res) => {

    const xx = req.params.id

    Doctor.find(xx).then((doctor) => {
        if (!doctor) {
            return res.status(404).send()
        }
        res.send(doctor)
    }).catch((e) => {
        console.log('req ooo tää', + req)
        res.status(500).send('req ooo tää', + req)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})