const express = require('express')
require('./db/mongoose')
const ticketRouter = require('./routers/ticket')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(ticketRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})