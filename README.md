# To run a ticket book
steps to run a program <br/>
git clone https://github.com/AratioD/takenotes/tree/maintenancebook <br/>
npm install<br/>
npm run dev<br/>
download https://www.postman.com/ <br/>
Please see Postman's setting file in the repository.<br/>

**your_database_id** could be the following like **eb4216b593817708c6159db**

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

# Fid a specific ticket by ID
{{url}}/update/**your_database_id**

# Delete a ticket by ID
{{url}}remove/**your_database_id**

# Update a ticket by ID
{{url}}/update/**your_database_id**

{
	"status": "open"
}