// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Create an Express application
const app = express();

// Port where the server will run
const PORT = 3000;

// Middleware to parse JSON data from requests
app.use(bodyParser.json());

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`); // Log server running message
});

// Connect to MongoDB database             // DB Name Any Name we can use
mongoose.connect("mongodb://127.0.0.1:27017/database-name");

// Connection events for MongoDB
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:")); // Log connection error
db.once("open", () => console.log("Connected to MongoDB")); // Log success on connection

// Define schema for Student
const studentSchema = new mongoose.Schema({
  name: String,           // Student's full name
  age: Number,            // Student's age
  email: String,          // Student's email address
  course: String,         // Course the student is enrolled in
  admissionDate: String,    // Date of admission
});

// Create model for Student from schema
const Student = mongoose.model("Student", studentSchema);

/* ===========================
      CRUD API ROUTES
=========================== */

// CREATE - Add a new student (POST /students)
app.post("/students", async (req, res) => {
  try {
    console.log("Start POST API")

    const { name, age, email, course, admissionDate } = req.body;
    
    // Create new student from request body
    const studentData = new Student({
      name,
      age,
      email,
      course,
      admissionDate,
    }); 

    await studentData.save(); // Save to database

    res.status(201).json(studentData); // Return created student
  } catch (err) {
    res.status(400).json({ error: err.message }); // Return error if creation fails
  }
});

// READ ALL - Get all students (GET /students)
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find(); // Get all students from DB
    res.json(students); // Return all student records
  } catch (err) {
    res.status(500).json({ error: err.message }); // Return error if something goes wrong
  }
});