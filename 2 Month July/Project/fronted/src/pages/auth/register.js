import React, { useState } from 'react'
import instaimg from "./../../Assets/insta text img.png"
import facebooklogo from "./../../Assets/facebook logo.png"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import axios from "axios";

const Register = () => {

  const [email, setEmail] = useState("")
  const [UserName, setUsername] = useState("")
  const [Password, setpassword] = useState("")
  const [Fullname, setFullname] = useState("")
  const [MobileNo, setMobileNo] = useState("")



  const submitFrom = async () => {
    try {
      console.log(email, "email")
      console.log(UserName, "UserName")
      console.log(Password, "Password")
      console.log(Fullname, "Fullname")
      console.log(MobileNo, "MobileNo")

      const apiResponse = await axios.post("http://localhost:9090/api/auth/register", {
        userName: UserName,
        fullName: Fullname,
        email: email,
        password: Password,
        MobileNo : MobileNo
      })
      console.log(apiResponse, "apiResponse")

    } catch (error) {
      console.log()

    }
  }
  return (
    <div>
      <div className="register-container">
        <div className="Box-1">
          <div className="box-1-logo">
            <img src={instaimg} alt="" className="instagram-logo" />
            <p className="info">Sign up to see photos and videos<br />From your friends.</p>
            <button type="submit" className="btn btn-primary  mt-2 google-login-btn">
              <img src={facebooklogo} alt="" className="google-logo" /> <u>Login with google</u> </button>

          </div>

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
              <input type="number"
                className="form-control my-2"
                id="exampleInputMobileNo"
                placeholder="Enter MobileNo"
                onChange={(e) => setMobileNo(e.target.value)} />

            </div>






            <div className="form-group">
              <input type="text"
                className="form-control my-2"
                id="exampleInputfullName"
                placeholder="FullName"
                onChange={(e) => setFullname(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control my-2 "
                id="exampleInputuserName"
                placeholder="UserName"
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <input type="password"
                className="form-control my-2 "
                id="exampleInputPassword1"
                placeholder="Password"
                onChange={(e) => setpassword(e.target.value)}
              />
            </div>


            <Button variant="primary" onClick={submitFrom}>
              Sign up
            </Button>
            <p className="Info-2 mb-2 mt-2">By signing up, you agree to our Terms, Data<br />
              Policy and Cookies Policy.</p>
            <hr />
          </form>

        </div>

        <div className="Box-2">
          <div className="box-2info">
            <p className="text-3">Have an Account ?  <br /><span className="loginbtn"><u><b>Log in</b></u> </span></p>

          </div>
        </div>

      </div>

    </div>
  )
}

export default Register
