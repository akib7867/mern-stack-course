
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import React from 'react'
import Table from 'react-bootstrap/Table';

const Student = () => {
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
                                        <Form.Control type="text" placeholder="Enter Full Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGrid Age">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control type="Number" placeholder=" Enter your Age" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="formGridAddress1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control placeholder="1234 Main St" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>City</Form.Label>
                                        <Form.Control />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridState">
                                        <Form.Label>State</Form.Label>
                                        <Form.Select defaultValue="Choose...">
                                            <option>Choose...</option>
                                            <option>...</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGripincode">
                                        <Form.Label>Pin code</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
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
                                        <th>N.0</th>
                                        <th>Full NAME</th>
                                        <th>Age</th>
                                        <th>Address</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Pin code</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Akib Alase</td>
                                        <td>24</td>
                                        <td>Karad vita,Road</td>
                                        <td>karad</td>
                                        <td>maharashtr</td>
                                        <td>415-105</td>
                                    </tr>
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
