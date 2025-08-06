import React, { useState } from 'react'
import loginimg from "./../../Assets/login page img.png"
import instaimg from "./../../Assets/insta text img.png"
import logogoogle from "./../../Assets/google logo.png"
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setpassword] = useState("")




    const submitlogin = async () => {
        try {
            console.log(email, "email")

            console.log(password, "password")


            const apiResponse = await axios.post("http://localhost:9090/api/auth/login", {


                email: email,
                password: password
            })

            if (apiResponse.Data.tokan) {
                 localStorage.setItem("userData",apiResponse.Data.tokan)
            }

        } catch (error) {
            console.log()

        }
    }

    return (
        <div className="text-1">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={loginimg} alt="" className=" mt-5  login-page" />
                    </div>

                    <div className="col-md-6 text-center">
                        <img src={instaimg} alt='' className="instagram-logo mb-5"></img>

                        <form className="login-form">
                            <div className="form-group">
                                <input type="email"
                                    className="form-control my-2"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                    onChange={(e) => setEmail(e.target.value)} />

                            </div>
                            <div className="form-group">
                                <input type="password"
                                    className="form-control my-2 "
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={(e) => setpassword(e.target.value)}
                                />
                            </div>


                            <Button variant="primary" onClick={submitlogin}>
                                login
                            </Button>
                            <hr />
                            <div className='text-center'>
                                <img src={logogoogle} alt="" className="goole-logo" />

                            </div>

                            <p className="text-center mt-5">Forgot Password?</p>
                            <p className="text-center">Don't have an account? <b> <Link to="/register">Sign  up</Link></b> </p>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login
