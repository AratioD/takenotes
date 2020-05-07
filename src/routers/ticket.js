const express = require('express')
const Ticket = require('../models/ticket')
const router = new express.Router()




router.get('/test', (req, res) => {
    res.send('testing 4 wwwwwdfdfdfever')
})
// Create a service to ticket
router.post('/ticket', async (req, res) => {

    const ticket = new Ticket(req.body)
    try {
        await ticket.save()
        res.status(201).send(ticket)
    } catch (e) {
        res.status(400).send(e)
    }
})

// Fetch all tickets data
router.get('/all', async (req, res) => {

    try {
        const tickets = await Ticket.find({}).sort({urgency: 1, createdAt: -1})
        // const tickets = await Ticket.find({}).sort({urgency:1})
        res.send(tickets)
    } catch (error) {
        res.status(500).send(error)
    }
})

//Search with parameters. The array is always sorted by urgency and when a ticket has been created.
router.get('/search', async (req, res) => {
    try {
        const tickets = await Ticket.find(req.query).sort({urgency: 1, createdAt: -1})
        res.send(tickets)
    } catch (error) {
        res.status(500).send(error)
    }
})

// Update status, urgency or worker parameters
router.patch('/update/:id', async (req, res) => {
    debugger
    const _id = req.params.id
    const updates = Object.keys(req.body)
    //Only allowed update fields
    const allowedUpdates = ['status', 'urgency', 'worker']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const ticket = await Ticket.findByIdAndUpdate({ "_id": (_id) }, req.body, { new: true, runValidators: true })
        if (!ticket) {
            return res.status(404).send()
        }

        res.send(req.body)
    } catch (e) {
        res.status(400).send(e + " " + req.params.id + " " + req.body)
    }
})


// Find a specific ticket by ID
router.get('/search/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const ticket = await Ticket.findById(_id)
        if (!ticket) {
            return res.status(404).send("ERROR NO TICKET FOUND --> " + _id)
        }
        res.send(ticket)
    } catch (error) {
        res.status(500).send("ERROR NO TICKET FOUND --> " + _id)
    }
})

//Delete one reservation there
router.delete('/delete/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const ticket = await ticket.deleteOne({ "_id": (_id) })
        if (!ticket) {
            return res.status(404).send(_id)
        }
        res.send("Succesfully deleted -->" + _id)
    } catch (error) {
        res.status(500).send(error + " " + _id)
    }
})


// GET /tasks?completed=true
// // GET /tasks?limit=10&skip=20
// app.get('/search', async (req, res) => {
//     const match = {}
//     debugger
//     res.send('ssss')

//     // if (req.query.urgency) {
//     match.urgency = req.query.urgency === 'high'
// }

// try {
//     await req.user.populate({
//         path: 'search',
//         match: {
//             urgency: 'high'
//         }
//     }).execPopulate()
//     res.send(req.user.tasks)
// } catch (e) {
//     res.status(500).send()
// }
// })

// //Fetch a specific ticket all time slots.
// app.get('/search', async (req, res) => {
//     try {
//         // const ticket = await Ticket.find(req.body).sort({time: 'ascending'})
//         const ticket = await Ticket.find(req.body).sort({time: -1})
//         const name = req.body
//         if (ticket.length == 0) {
//             res.send("ERROR! NO FOUND SEARCH KEY.")
//         }

//         res.send(ticket)
//     } catch (error) {
//         res.status(500).send("ERROR! NO FOUND SEARCH KEY." + error)
//     }
// })


//Sort by profession
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

module.exports = router