const express = require('express')
const router = new express.Router()

router.get('/test', (req,res)=> {
    res.send('testing 4 wwwwwever')
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

// Fetch all tickets depending closed or not
router.get('/alltickects', async (req, res) => {

    try {
        const tickets = await Ticket.find({})
        res.send(tickets)
    } catch (error) {
        res.status(500).send(error)
    }
})


// // Find a specific ticket by ID
// app.get('/ticket/:id', async (req, res) => {
//     const _id = req.params.id

//     try {
//         const ticket = await Ticket.findById(_id)
//         if (!ticket) {
//             return res.status(404).send("ERROR NO TICKET FOUND --> " + _id)
//         }
//         res.send(ticket)
//     } catch (error) {
//         res.status(500).send("ERROR NO TICKET FOUND --> " + _id)
//     }
// })
// Fetch a specific ticket all time slots.
// router.app.get('/search', async (req, res) => {

//     const match = {}
//     // const sort = {}

//     if (req.query.status) {
//         match.status = req.query.status === 'closed'
//     }

//     try {
//         // const ticket = await Ticket.find(req.body).sort({time: 'ascending'})
//         await req.populate({
//             path: 'search',
//             match: {
//                 urgency: 'high'
//             }

//         }).execPopulate()
//         res.send(req.user.tasks)

//         //     match,
//             options: {
//                 sort: {
//                     urgency: -1
//                 }
//             }
//         })
//         const name = req.body
//         if (ticket.length == 0) {
//             res.send("ERROR! NO FOUND SEARCH KEY.")
//         }

//         res.send(ticket)
//     } catch (error) {
//         res.status(500).send("ERROR! NO FOUND SEARCH KEY." + error)
//     }
// })



// // GET /tasks?completed=true
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

module.exports = router