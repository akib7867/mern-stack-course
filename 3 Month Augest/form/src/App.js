import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { useState } from "react";
import ExampleCustomHook from "./All Hooks/exampleCustomHook";
import ExampleuseMemo from "./All Hooks/exampleUseMemo";
import ExampleUseReducer from "./All Hooks/exampleUseReducer";
import ExampleUseRef from "./All Hooks/exampleUseRef";



function App() {
  const [showCustomHook, setShowCustomHook] = useState(false);
  const [showUseMemo, setShowUseMemo] = useState(false)
  const [showUseReducer, setShowUseReducer] = useState(false)
  const [showUseref, setshowUseref] = useState(false)


  const handleCustomHook = () => {
    try {
      setShowUseReducer(false)
      setShowUseMemo(false)
      setshowUseref(false)
      setShowCustomHook(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUseMemo = () => {
    try {
      setShowUseReducer(false)
      setShowCustomHook(false)
      setshowUseref(false)
      setShowUseMemo(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleUseReducer = () => {
    try {
      setShowCustomHook(false)
      setShowUseMemo(false)
      setshowUseref(false)
      setShowUseReducer(true)
    } catch (error) {
      console.log(error)
    }
  }

  const handleuseRef = () => {
    try {
      setShowCustomHook(false)
      setShowUseMemo(false)
      setShowUseReducer(false)
      setshowUseref(true)
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <div className="">
      <div className="container">
        <div className="row ">
          <div className="col-md-1 mx-4 mt-2">
            <button className="btn btn-primary" onClick={handleCustomHook}>customHook</button>
          </div>
          <div className="col-md-1 mx-4 mt-2">
            <button className="btn btn-primary" onClick={handleUseMemo}>useMemo</button>
          </div>
          <div className="col-md-1 mx-4 mt-2">
            <button className="btn btn-primary" onClick={handleUseReducer}>UseReducer</button>
          </div>
          <div className="col-md-1 mx-4 mt-2">
            <button className="btn btn-primary" onClick={ handleuseRef}>useRef</button>

          </div>
        </div>
      </div>
      {showCustomHook && <ExampleCustomHook />}
      {showUseMemo && <ExampleuseMemo />}
      {showUseReducer && <ExampleUseReducer />}
      {showUseref && <ExampleUseRef/>}
    </div>
  );
}

export default App;


