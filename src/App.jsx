import React, { useState } from "react";
import Title from "./components/Title";
import './App.css'
import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="container">
      <div className="title">
        <button onClick={() => setToggle(prev => !prev)}>{toggle ? "hide" : "show"}</button>
        {toggle && <Title />}
      </div>
      <div className="forms">
        <FormOne/>
        <FormTwo/>
      </div>
    </div>
  );
};

export default App;
