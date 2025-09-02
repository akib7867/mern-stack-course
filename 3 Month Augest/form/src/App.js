import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { useState } from "react";
import ExampleCustomHook from "./All Hooks/exampleCustomHook";
import ExampleuseMemo from "./All Hooks/exampleUseMemo";
import ExampleUseReducer from "./All Hooks/exampleUseReducer";



function App() {
  const [showCustomAkib, setShowCustomAkib] = useState(false);
  const[showUseMemo , setShowUseMemo] = useState(false)
  const[showUseReducer , setShowUseReducer] = useState(false)


  const handleCustomAkib = ()=>{
    try {
      setShowUseReducer(false)
      setShowUseMemo(false)
      setShowCustomAkib(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUseMemo = () =>{
    try {
      setShowUseReducer(false)
      setShowCustomAkib(false)
      setShowUseMemo(true)
    } catch (error) {
       console.log(error)
    }
  }

  const handleUseReducer = () =>{
    try {
       setShowCustomAkib(false)
      setShowUseMemo(false)
      setShowUseReducer(true)
    } catch (error) {
       console.log(error)
    }
  }
  return (
    <div className="">
      <div className="container">
        <div className="row ">
          <div className="col-md-1 mx-2 mt-2">
            <button className="btn btn-primary" onClick={handleCustomAkib}>customHook</button>
          </div>
          <div className="col-md-1 mx-2 mt-2">
            <button className="btn btn-primary" onClick={handleUseMemo}>useMemo</button>
          </div>
          <div className="col-md-1 mx-2 mt-2">
            <button className="btn btn-primary" onClick={handleUseReducer}>UseReducer</button>
          </div>
        </div>
      </div>
      {showCustomAkib && <ExampleCustomHook/>}
      {showUseMemo && <ExampleuseMemo/>}
      {showUseReducer && <ExampleUseReducer/>}
    </div>
  );
}

export default App;


