# To run a ticket book
steps to run program <br/>
git clone https://github.com/AratioD/takenotes/tree/maintenancebook <br/>
npm install<br/>
npm run dev<br/>

# Create a new ticket

http://localhost:3000/ticket

An example of RAW JSON input by Postman

{<br/>
	"status": "open",
	"urgency": "high",
	"device": "other",
	"description": "slippery floor",
	"worker": "simo putkimies"
}


# Get all tickets

http://localhost:3000/alltickects

Post an empty postman  com

# Get a list

http://localhost:3000/doctor/

# Search by keyword

http://localhost:3000/search
"profession": "cardiologist",
"name": "mike",
"time": 1,

# Get a one user

http://localhost:3000/doctor/ --> id "5eadae542a2304046c8c10af"

# Delete an appointment by ID

http://localhost:3000/remove/ --> id "5eadae542a2304046c8c10af"

# Update an appointment by ID

http://localhost:3000/doctorupdate/:id --> id "5eadae542a2304046c8c10af"

and provide a body
"profession": "cardiologist",
"name": "mike",
"time": 1,
