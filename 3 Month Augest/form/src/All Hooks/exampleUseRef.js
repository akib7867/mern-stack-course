import React, { useRef } from 'react'

const ExampleUseRef = () => {
    const inputRef = useRef(null);

    const handleClick = () =>{
        try {
            inputRef.current.focus()
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
      <h1>UseRef</h1>
      <input type="text" placeholder="Enter your Name" className="input-group-text"/>
      <button className="mt-4 mx-4  btn btn-primary" ref={inputRef}inputRef onClick={handleClick}>Click</button> 
    </div>
  )
}

export default ExampleUseRef
