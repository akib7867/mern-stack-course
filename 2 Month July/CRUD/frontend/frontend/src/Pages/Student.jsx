
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios';

//  ...create hook....
const Student = () => {
    const [studentData, setStudentData] = useState();

    const [name, setName] = useState()
    const [age, setAge] = useState()
    const [email, setEmail] = useState()
    const [course, setCourse] = useState()
    const [admissionDate, setAdmissiondate] = useState()



    // API Integration => GET All studnt List
    const getAllStudentData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/students");
            setStudentData(response.data);
            console.log(response.data, "response");
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllStudentData();
    }, []);

    const submitStudentData = async () => {

        try {
            const payload = {
                name: name,
                age: age,
                email: email,
                course: course,
                admissionDate: admissionDate,
            };
            const response = await axios.post("http://localhost:3000/students", payload);

            console.log(response.data, "====>")

        } catch (error) {
            console.log(error);
        }
    };

    const onChangeName = (e) => {
        try {
            setName(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeAge = (e) => {
        try {
            setAge(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeEmail = (e) => {
        try {
            setEmail(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeCourse = (e) => {
        try {
            setCourse(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }

    const onChangeAdmissiondate = (e) => {
        try {
            setAdmissiondate(e.target.value)
        } catch (error) {
            console.log(error)
        }
    }



    return (

        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="add-form-dev">
                            <h3 className='text-center'>Student Add Form</h3>
                            <Form>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter Full Name" onChange={onChangeName} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGrid Age">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="Number" placeholder=" Enter your Age" onChange={onChangeAge} />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridEmail" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control placeholder="email" onChange={onChangeEmail} />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCourse">
                                        <Form.Label>Course</Form.Label>
                                        <Form.Control placeholder="course" onChange={onChangeCourse} />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridAdmission Date">
                                        <Form.Label>Admission Date</Form.Label>
                                        <Form.Control placeholder="Admissiondate" onChange={onChangeAdmissiondate} />
                                    </Form.Group>
                                </Row>



                                <Button variant="primary" onClick={submitStudentData}>
                                    Submit
                                </Button>
                            </Form>

                        </div>



                    </div>

                    <div className="col-md-6">
                        <div className="add-form-dev">
                            <h3 className="text-center">Student List</h3>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th> NAME</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                        <th>Cours</th>
                                        <th>Addmission Date</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>

                                        <td>Akib Alase</td>
                                        <td>24</td>
                                        <td>akibjavedalase@gmail.com</td>
                                        <td>B.com</td>
                                        <td> 02/04/2024</td>
                                    </tr>

                                    {studentData &&
                                        studentData.map((each, index) => (
                                            <tr>

                                                <td>{each?.name}</td>
                                                <td>{each?.age}</td>
                                                <td>{each?.email}</td>
                                                <td>{each?.course}</td>
                                                <td>{each?.admissiondate}</td>
                                            </tr>
                                        ))}

                                </tbody>
                            </Table>
                        </div>


                    </div>





                </div>
            </div>
        </div>
    );
};

export default Student;  
