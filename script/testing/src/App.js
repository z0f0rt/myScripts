import React, { useState } from "react";
import "./App.css";
import { MyList } from "./MyList";
import { texts } from "./texts.js";

function App() {
  const [notes1, setNotes1] = useState([...texts]);
  const [notes2, setNotes2] = useState([]);

  function func1(index) {
    const x = notes1.splice(index, 1);
    setNotes1([...notes1]);
    notes2.push(...x);
    setNotes2([...notes2]);
  }

  function func2(index) {
    const y = notes2.splice(index, 1);
    setNotes2([...notes2]);
    notes1.push(...y);
    setNotes1([...notes1]);
  }

  return (
    <div className="App">
      <MyList className="left" list={notes1} onElemClick={func1} />
      <MyList className="right" list={notes2} onElemClick={func2} />
    </div>
  );
}

export default App;
