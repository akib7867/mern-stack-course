
import { Button } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react"

function App() {
  const [name, setName] = useState()
  const [showName, setShowName] = useState(false);


  const handelonchange = (e) => {

    console.log(e.target.value);

    setName(e.target.value);
  };

  const handelSubmit = () => {
    setShowName(true);

  };

  const [buttonData, setbuttonData] = useState(
    [
      { button: "button 1" },
      { button: "button 2" },
      { button: "button 3" },
      { button: "button 4" },
    ]
  );

  return (
    <>



      <Button />

      <input Name="Name"
        placeholder="Enter Your Name"
        onChange={handelonchange}
      />

      <button onClick={handelSubmit}> Submit </button>

      {showName && <h1>{name}</h1>}

      <br />
      <br />
      <br />






    </>
  );
};

export default App