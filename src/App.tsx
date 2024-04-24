import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Navbar show={show} setShow={setShow} />
    </div>
  );
}

export default App;
