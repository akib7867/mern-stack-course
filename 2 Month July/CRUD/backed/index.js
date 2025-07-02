// Import required modules
const express = require("express");
const bodyParser = require("body-parser");
const connectMongoDb = require("./config/db");
const { getallstudent, creatstudent } = require("./controllers/studentcontroller");
const cors = require("cors");
// Create an Express application
const app = express();

// Port where the server will run
const PORT = 3000;

// Middleware to parse JSON data from requests
app.use(bodyParser.json());
app.use(cors());

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // Log server running message
});

// Connect to MongoDB database            
connectMongoDb()





// CREATE - Add a new student (POST /students)
app.post("/students", creatstudent);

// READ ALL - Get all students (GET /students)
app.get("/students", getallstudent);