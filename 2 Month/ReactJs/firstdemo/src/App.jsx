

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

  return (
    <>
      <input Name="Name"
        placeholder="Enter Your Name"
        onChange={handelonchange} 
        />

      <button onClick={handelSubmit}> Submit </button>

      {showName && <h1>{name}</h1>}


    </>
  );
};

export default App