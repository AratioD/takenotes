const express = require('express')
require('./db/mongoose')
const Ticket = require('./models/ticket')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
// Create an appointment to ticket
app.post('/ticket', async (req, res) => {

    const ticket = new Ticket(req.body)

    try {
        await ticket.save()
        res.status(201).send(ticket)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Fetch all tickets depending closed or not
app.get('/alltickects', async (req, res) => {

    try {
        const tickets = await Ticket.find({})
        res.send(tickets)
    } catch (error) {
        res.status(500).send(error)
    }
})


// Find a specific ticket by ID
app.get('/ticket/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const ticket = await Ticket.findById(_id)
        if (!ticket) {
            return res.status(404).send("not found a ticket by following ID --> " + _id)
        }
        res.send(ticket)
    } catch (error) {
        res.status(500).send(error)
    }
})

// //Fetch a specific ticket all time slots.
// app.get('/search', async (req, res) => {
//     try {
//         const ticket = await ticket.find(req.body)

//         const name = req.body
//         if (ticket.length == 0) {
//             res.send("No such a name: " + req.body.name)
//         }

//         res.send(ticket)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })


// //Sort by profession
// app.get('/tickettype', async (req, res) => {
//     try {
//         const ticket = await ticket.find(req.body)

//         const name = req.body
//         if (ticket.length == 0) {
//             res.send("No such a name: " + req.body.name)
//         }

//         res.send(ticket)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// //Delete one reservation there
// app.delete('/remove/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const ticket = await ticket.deleteOne({ "_id": (_id) })
//         if (!ticket) {
//             return res.status(404).send(_id)
//         }
//         res.send("Succesfully deleted -->" + _id)
//     } catch (error) {
//         res.status(500).send(error + " " + _id)
//     }
// })

// // Update ticket appointment
// app.patch('/ticketupdate/:id', async (req, res) => {
//     const _id = req.params.id
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['profession', 'name', 'time']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const ticket = await ticket.findByIdAndUpdate({ "_id": (_id) }, req.body, { new: true, runValidators: true })
//         if (!ticket) {
//             return res.status(404).send()
//         }

//         res.send(req.body)
//     } catch (e) {
//         res.status(400).send(e + " " + req.params.id + " " + req.body)
//     }
// })

// // Update ticket appointment
// app.put('/updateall/:id', async (req, res) => {
//     const _id = req.params.id
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['profession', 'name', 'time']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

//     if (!isValidOperation) {
//         return res.status(400).send({ error: 'Invalid updates!' })
//     }

//     try {
//         const ticket = await ticket.findByIdAndUpdate({ "_id": (_id) }, req.body, { new: true, runValidators: true })
//         if (!ticket) {
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