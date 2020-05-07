# To run a ticket book
steps to run a program <br/>
git clone https://github.com/AratioD/takenotes/tree/maintenancebook <br/>
npm install<br/>
npm run dev<br/>
download https://www.postman.com/ <br/>
Please see Postman's setting file in the repository.<br/>


# Create a new ticket
http://localhost:3000/ticket

An example of RAW JSON input by Postman
<br/>
{
	"status": "open",
	"urgency": "high",
	"device": "other",
	"description": "slippery floor",
	"worker": "simo putkimies"
}


# Get all tickets
{{url}}/all

Post an empty postman  

# Search by parameters
{{url}}/search?device=pipe&status=open
Please provide schema object with a parameter

# Search by ID
{{url}}/update/**eb4216b593817708c6159db**

# Delete a ticket by ID
{{url}}remove/**your database _id**

# Update an appointment by ID
{{url}}/update/**your database _id**

{
	"status": "open"
}