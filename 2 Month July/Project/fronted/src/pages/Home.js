import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const [show, setShow] = useState(false);
    const [userData, setUserData] = useState(null);

  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getUserProfile = async () =>{
    try {
      const token = localStorage.getItem("userToken");

      if(!token){
        navigate("/");
        return;
      }

      const apiResponse = await axios.get(" http://localhost:9090/api/user/getuserprofile",
        {
          headers :{
            Authorization :` Bearer ${token}`,
          },
        }
      );

      setUserData(apiResponse.data.userData);

    } catch (error) {
      console.error("Error fetching user info" , error);
      navigate("/login")
    }
  };

  console.log(userData ,"userData")

 useEffect (() =>{
getUserProfile();
},[]);

const handleLogout =()=>{
  localStorage.removeItem("userToken");
  navigate("/")
};


  return (
    <div className="container mt-5">

      <div className="row ">
        <div className="col-md-4 my-4 "
>
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBlYJfFRvdZG0LNuiRs6l1PNx1bIfZkqZIsQ&s"
            alt="Profile"
            className="profile-img rounded-circle"
          />
        </div>

        <div className="col-md-4 text-center mt-5">
          <h2 className="mb-3">{userData?.fullName}</h2>
          <ul className="list-unstyled">
            <li>
              <strong>Username:</strong> {userData?.userName}
            </li>
            <li>
              <strong>Email:</strong> {userData?.email}
            </li>
            <li>
              <strong>Mobile:</strong> {userData?.mobileNo}
            </li>
          </ul>
        </div>

        <div className="col-md-4 text-center mt-5 ">
          <button className="btn btn-danger my-1 w-100" onClick={handleLogout }>Log Out</button>
          <button className="btn btn-primary my-1 w-100" onClick={handleShow}>
              Edit Profile
            </button>
           <button className="btn btn-warning my-1 w-100">
              Delete Profile
            </button>
            <button className="btn btn-success my-1 w-100">Create Post</button>
          
        </div>

      </div>


      {/* My post */}

      <div className="row  mt-5"  >
        <div className="col-md-6 border border-primary">
          <h2 className="text-center">Feeds</h2>
          {[1, 2, 3].map((_, index) => (
            <div className="card shadow-sm mb-3" key={index}>
              <img
                src="https://tse4.mm.bing.net/th/id/OIP.ZHEaEn6yqgb76ySxdb3S6gHaE-?rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Feed"
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">Beautiful Scenery</h5>
                <p className="card-text">
                  This is an example post with amazing views.
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="col-md-6 border border-primary">
          <h2 className="text-center">My Post</h2>
          <div className="card shadow-sm">
            <img
              src="https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0"
              alt="My Post"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Sunrise by the Lake</h5>
              <p className="card-text">
                Capturing calmness and nature's beauty during sunrise.
              </p>
            </div>
            <button>Edit</button>
          </div>

          <div className="card shadow-sm">
            <img
              src="https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0"
              alt="My Post"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Sunrise by the Lake</h5>
              <p className="card-text">
                Capturing calmness and nature's beauty during sunrise.
              </p>
            </div>
            <button>Edit</button>
          </div>
        </div>
      </div>

         <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="login-form">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLQUXqMrzrmkxd3QpxGL5bzgxELsztrL1AgQ&s"
              alt="Profile"
              className="profile-img rounded-circle"
            />
            <div class="form-group">
              <input
                type="text"
                className="form-control my-2 w-100"
                placeholder="Enter username"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                className="form-control my-2 w-100"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <input
                type="number"
                className="form-control my-2 w-100"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Mobile"
              />
            </div>

            <button type="submit" className="btn btn-primary  mt-3 login-btn">
              Submit
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Home
