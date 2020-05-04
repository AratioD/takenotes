# To run maintenance book
npm run dev

# Doctor reservation demo app

A demo application to simulate time reservation program.

# Create an appointment

http://localhost:3000/doctor

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
