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
app.get('/doctors', async (req, res) => {

    try {
        const doctors = await Doctor.find({})
        res.send(doctors)
    } catch (error) {
        res.status(500).send(error)
    }
})


//Find time slots by mongoose ID.
app.get('/doctor/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const doctor = await Doctor.findById(_id)
        if (!doctor) {
            return res.status(404).send("not found user by following id --> " + _id)
        }
        res.send(doctor)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Fetch a specific doctor all time slots.
app.get('/doctorname', async (req, res) => {
    try {
        const doctor = await Doctor.find(req.body)

        const name = req.body
        if (doctor.length == 0) {
            res.send("No such a name: " + req.body.name)
        }

        res.send(doctor)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Delete one reservation there
app.delete('/remove/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const doctor = await Doctor.deleteOne({ "_id": (_id) })
        if (!doctor) {
            return res.status(404).send(_id)
        }
        res.send("Succesfully deleted -->" + _id)
    } catch (error) {
        res.status(500).send(error + " " + " " + _id)
    }
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})