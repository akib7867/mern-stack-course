
const mongoose = require("mongoose");

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

module.exports = Student;