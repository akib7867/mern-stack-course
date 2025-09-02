import React, { useReducer } from "react";

const ExampleUseReducer = () => {
  const reducer = (currentvalue, payload) => {
    if (payload.type === "add" ) {
      return currentvalue + 5;
    }
    if(payload.type === "sub") {
      return currentvalue - 5;
    }

    return currentvalue;
  
  };



  const [count, dispatch] = useReducer(reducer, 120);
    

  const handleAdd = () => {
    try {
      dispatch({ type: "add" });
    } catch (error) {}
  };

  const handleSub = () =>{
    try {
       dispatch({ type: "sub" });
    } catch (error) {
      
    }
  }
  return (
    <div>
      <h2>useReducer</h2>
      <h3>count : {count}</h3>
      <br/>
      <button className="btn btn-success mx-2" onClick={handleAdd}>
         Add
      </button>
       <button className="btn btn-success mx-2" onClick={handleSub}>
         Sub
      </button>

    </div>
  );
};

export default ExampleUseReducer;

