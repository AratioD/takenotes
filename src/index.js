const express = require('express')
require('./db/mongoose')
const Ticket = require('./models/ticket')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// Create an appointment to doctor
app.post('/ticket', async (req, res) => {

    const ticket = new Ticket(req.body)

    try {
        await ticket.save()
        res.status(201).send(ticket)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Fetch all doctor appointments.
app.get('/alltickects', async (req, res) => {

    try {
        const tickets = await Ticket.find({})
        res.send(tickets)
    } catch (error) {
        res.status(500).send(error)
    }
})


// //Find time slots by mongoose ID.
// app.get('/doctor/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const doctor = await Doctor.findById(_id)
//         if (!doctor) {
//             return res.status(404).send("not found doctor by following id --> " + _id)
//         }
//         res.send(doctor)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// //Fetch a specific doctor all time slots.
// app.get('/search', async (req, res) => {
//     try {
//         const doctor = await Doctor.find(req.body)

//         const name = req.body
//         if (doctor.length == 0) {
//             res.send("No such a name: " + req.body.name)
//         }

//         res.send(doctor)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })


// //Sort by profession
// app.get('/doctortype', async (req, res) => {
//     try {
//         const doctor = await Doctor.find(req.body)

//         const name = req.body
//         if (doctor.length == 0) {
//             res.send("No such a name: " + req.body.name)
//         }

//         res.send(doctor)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// //Delete one reservation there
// app.delete('/remove/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const doctor = await Doctor.deleteOne({ "_id": (_id) })
//         if (!doctor) {
//             return res.status(404).send(_id)
//         }
//         res.send("Succesfully deleted -->" + _id)
//     } catch (error) {
//         res.status(500).send(error + " " + _id)
//     }
// })

// // Update doctor appointment
// app.patch('/doctorupdate/:id', async (req, res) => {
//     const _id = req.params.id
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['profession', 'name', 'time']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const doctor = await Doctor.findByIdAndUpdate({ "_id": (_id) }, req.body, { new: true, runValidators: true })
//         if (!doctor) {
//             return res.status(404).send()
//         }

//         res.send(req.body)
//     } catch (e) {
//         res.status(400).send(e + " " + req.params.id + " " + req.body)
//     }
// })

// // Update doctor appointment
// app.put('/updateall/:id', async (req, res) => {
//     const _id = req.params.id
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['profession', 'name', 'time']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const doctor = await Doctor.findByIdAndUpdate({ "_id": (_id) }, req.body, { new: true, runValidators: true })
//         if (!doctor) {
//             return res.status(404).send()
//         }

//         res.send(req.body)
//     } catch (e) {
//         res.status(400).send(e + " " + req.params.id + " " + req.body)
//     }
// })


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})