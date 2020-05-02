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
        res.send(doctor)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})