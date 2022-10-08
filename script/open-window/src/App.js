import React, { useState } from "react";
import "./App.css";
import { LeftWindow } from "./LeftWindow";

function App() {
  const [isLeftPanelOpen, setisLeftPanelOpen] = useState(false);
  return (
    <div className="App">
      <button className="btn" onClick={() => setisLeftPanelOpen(true)}>
        Получить окошко
      </button>
      <LeftWindow isOpen={isLeftPanelOpen} setisLeftPanelOpen ={setisLeftPanelOpen}/>
    </div>
  );
}

export default App;
