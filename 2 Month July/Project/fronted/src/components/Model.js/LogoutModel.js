import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const LogOutModel = ({show, handleClose ,handleConfirm}) => {
  return (
    <div>
      <Modal
     show= {show}
     onHide = {handleClose}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Confirm Logout
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
         Are you sure you want to LogOut?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>No</Button>
         <Button variant='danger' onClick={handleConfirm}>Yes</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default LogOutModel

