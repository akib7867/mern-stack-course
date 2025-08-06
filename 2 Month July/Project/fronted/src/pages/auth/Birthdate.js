import React from 'react'
import { Link } from 'react-router-dom'

const Birthdate = () => {
  return (
    <div className="box">
      <div className="birthtext">
        <h1>Add Birthdate</h1>
      </div>
      <p  className="p-text-1">This won t to be part of public profile</p>
      <p className="p-text-2">why do i need to provide my Birthday?</p>
      <br/>
      <br/>
      <p className="p-text-3">Use your own Birthdate.even wif this account is for a business,<b/>a pet of something else.</p>
      <br/>
      <br/>
      <button  className="next-btn"><Link to="/home">Next</Link></button>
    </div>
  )
}

export default Birthdate
