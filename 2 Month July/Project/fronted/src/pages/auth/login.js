import React, { useEffect, useState } from 'react'
import loginimg from "./../../Assets/login page img.png"
import instaimg from "./../../Assets/insta text img.png"
import logogoogle from "./../../Assets/google logo.png"
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    let navigate = useNavigate();

    const submitLogin = async () => {
        try {
            const apiResponse = await axios.post(" http://localhost:9090/api/auth/login", {

                email: email,
                password: password
            })

            if (apiResponse.data.token) {
                toast.success("login successfull!")
                setTimeout(() => {
                    localStorage.setItem("userToken", apiResponse.data.token);
                    navigate("/home")
                }, 1000)


            }


        } catch (error) {
            console.log(error)
            const errormassage = error.response.date.massage || "invalid Passward or email"


            toast.error = (errormassage)

        }
    }

    const checkLoginIsTrue = () => {
        try {
            const token = localStorage.getItem("userToken");
            if (token) {
                navigate("/home")
            }
        } catch (error) {
            console.log(error)

        }
    };

    useEffect(() => {
        checkLoginIsTrue();
    }, [])




    return (
        <div className="login-page">
            <div className="container">
                <div className="row">




                    <div className="col-md-6 ">
                        <img src={loginimg} alt="" className="w-78" />
                    </div>


                    <div className="col-md-6 text-center">
                        <img src={instaimg} alt="" className="Instagram-icon mb-4" />

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
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>


                            <Button variant="primary" className="btn btn-primary  mt-3 login-btn" onClick={submitLogin}>
                                Sign Up
                            </Button>
                            <hr />
                            <div className="text-center">
                                <img src={logogoogle} alt="" className=" google-logo" />

                            </div>

                            <p className="text-center mt-5 test">Forgot Possword?</p>
                            <p className="text-center text1">Don't have an account? <span className="bold"><u> <Link to="/register"><b>Sign up</b></Link></u></span></p>

                        </form>

                        <ToastContainer position="top-right" autoClose={2000} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login