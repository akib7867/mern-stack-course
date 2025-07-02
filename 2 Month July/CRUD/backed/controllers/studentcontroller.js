const Student = require("../models/studentmodel");

const creatstudent = async (req, res) => {
    try {
        

        const { name, age, email, course, admissionDate } = req.body;

        
        const studentData = new Student({
            name,
            age,
            email,
            course,
            admissionDate,
        });

        await studentData.save(); 

        res.status(201).json(studentData); 
    } catch (err) {
        res.status(400).json({ error: err.message }); 
    }
}

const getallstudent = async (req, res) => {
    try {
        const students = await Student.find(); 
        res.json(students); 
    } catch (err) {
        res.status(500).json({ error: err.message }); 
    }
}


module.exports= {creatstudent, getallstudent}