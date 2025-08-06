import Login from "./pages/auth/login";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from "./pages/auth/register";
import Birthdate from "./pages/auth/Birthdate";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/birthday" element={<Birthdate/>}/>
       <Route path="/home" element={<Home/>}/>
     
    </Routes>
    </BrowserRouter>
  );
}

export default App;
