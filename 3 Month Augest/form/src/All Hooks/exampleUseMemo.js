import React, { useMemo, useState } from 'react'

const ExampleuseMemo = () => {
    
    const[number , setNumber] = useState(5);
    const [count , setCount ] = useState(0)

    const handleClick = () =>{
        try {
            setNumber(number + 5)
        } catch (error) {
            console.log(error)
        }
    }

    const squareNumber = useMemo(() =>{
        return number * number
    } , [number])
  return (
    <div>
      <h2>Use Memo</h2>
      <p>Number : {number}</p>
      <p>Square (Memorized) : {squareNumber}</p>

      <button className='btn btn-primary' onClick={handleClick}> click </button>
      <br/>
      <br/>
      <br/>
      <p>count : {count}</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

export default ExampleuseMemo

